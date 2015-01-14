(function(document) {
    var container = document.getElementById('jr-card-widget'),
        config = container.dataset,
        request = new XMLHttpRequest(),
        request_url = "//registry.jsonresume.org/" +
                      config.username + '.json',
        widget_stylesheet_url = "dist/jr-card-widget.css",
        fontawesome_url = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css",
        // widget_stylesheet_url = "//mudassir0909.github.io/jsonresume-card/dist/1.0.0/jr-card-widget.min.css",
        profile_url = '//registry.jsonresume.org/' + config.username;

    function getDatePair(work_info) {
        var start_date = new Date(work_info.startDate),
            end_date = work_info.endDate ? new Date(work_info.endDate) :
                       new Date();

        return {
            start_date: start_date.getTime(),
            end_date: end_date.getTime()
        };
    }

    function removeOverlaps(date_pairs) {
        if (date_pairs.length <= 1) {
            return date_pairs;
        }

        var dates_overlap, i, date_pair, previous_date_pair,
            has_overlap = false,
            consolidated_pairs = [];

        for(i=1; i<date_pairs.length; i++) {
            date_pair = date_pairs[i];
            previous_date_pair = date_pairs[i-1];
            dates_overlap = (date_pair.start_date >= previous_date_pair.start_date &&
                                date_pair.start_date < previous_date_pair.end_date );

            if (dates_overlap) {
                has_overlap = true;

                consolidated_pairs.push({
                    start_date: previous_date_pair.start_date,
                    end_date: Math.max(date_pair.end_date, previous_date_pair.end_date)
                });
            } else {
                if (i===1) {
                    consolidated_pairs.push(previous_date_pair);
                }

                consolidated_pairs.push(date_pair);
            }
        }

        return (has_overlap ? removeOverlaps(consolidated_pairs) : consolidated_pairs);
    }

    function getTotalExperience(work) {
        var date_pairs = work.map(getDatePair),
            experience_in_milliseconds, experience_in_years, delta;

        // Sort date pairs in ascending order of start date
        date_pairs = date_pairs.sort(function(a, b) {
            return a.start_date > b.start_date;
        });

        // Work experience might overlap, consolidate them to get accurate total experience
        date_pairs = removeOverlaps(date_pairs);

        experience_in_milliseconds = date_pairs.reduce(function(total_duration, date_pair) {
            var duration = date_pair.end_date - date_pair.start_date;

            return (total_duration + duration);
        }, 0);

        experience_in_years = experience_in_milliseconds / (365 * 84600 * 1000);
        delta = experience_in_years - parseInt(experience_in_years, 10);

        return parseInt(experience_in_years, 10) + (delta >= 0.5 ? 0.5 : 0);
    }

    function getSkillsCount(skills) {
        return skills.reduce(function(count, skill) {
            return count + skill.keywords.length;
        }, 0);
    }

    function getStats(resume) {
        return {
            total_experience: getTotalExperience(resume.work || []),
            total_awards: (resume.awards || []).length,
            total_publications: (resume.publications || []).length,
            total_skills: getSkillsCount(resume.skills || []),
            total_references: (resume.references || []).length
        };
    }

    function getUrlForProfile(network, username) {
        var url_map = {
            github: 'github.com',
            'stack-overflow': 'stackoverflow.com/users',
            codepen: 'codepen.io',
            twitter: 'twitter.com',
            facebook: 'facebook.com',
            dribble: 'dribbble.com',
            dribbble: 'dribbble.com',
            angellist: 'angel.co'
        };

        return '//' + url_map[network] + '/' + username;
    }

    function getSocialLinks(profiles) {
        var supported_networks = ['linkedin', 'github', 'stack-overflow',
                                  'codepen', 'twitter', 'facebook', 'dribbble',
                                  'angellist'],
            social_links = [];

        profiles.forEach(function(profile) {
            var network = profile.network.toLowerCase();

            if (supported_networks.indexOf(network) > 0 && (profile.url || profile.username)) {
                social_links.push({
                    network: network,
                    url: profile.url || getUrlForProfile(network, profile.username)
                });
            }
        });

        return social_links;
    }

    function render(resume) {
        var theme_class = "jr-card-theme-" + (config.theme || 'default'),
            basics = resume.basics,
            location_attributes = ['city', 'region', 'countryCode'],
            location_values = [],
            profile_picture_container, profile_picture_tag;

        location_attributes.forEach(function(attribute) {
            if (basics.location[attribute]) {
                location_values.push(basics.location[attribute]);
            }
        });

        container.className += theme_class;
        container.innerHTML = window.jr_tmpl['jr-card-template']({
            profile_url: profile_url,
            profile_image: basics.picture,
            display_name: basics.name,
            designation: basics.label,
            location: location_values.join(', '),
            email: basics.email,
            stats: getStats(resume),
            about: basics.summary,
            social_links: getSocialLinks(resume.basics.profiles || [])
        });

        if (!resume.basics.picture) {
            profile_picture_container =
                document.getElementsByClassName('jr-profile-picture-container');
            profile_picture_tag =  profile_picture_container[0].getElementsByTagName("img")[0];

            profile_picture_tag.src = window.getGravatar(basics.email, 100);
        }
    }

    function insertStylesheet(href) {
        var existing_stylesheet_tags, last_stylesheet_tag,
            tag_name = 'link',
            widget_stylesheet_tag = document.createElement(tag_name);

        widget_stylesheet_tag.rel = "stylesheet";
        widget_stylesheet_tag.href = href;
        widget_stylesheet_tag.type = "text/css";
        existing_stylesheet_tags = document.head.getElementsByTagName(tag_name);
        last_stylesheet_tag = existing_stylesheet_tags[existing_stylesheet_tags.length - 1];

        if (last_stylesheet_tag) {
            last_stylesheet_tag.parentNode
                                .insertBefore(widget_stylesheet_tag,
                                              last_stylesheet_tag.nextSibling);
        } else {
            document.head.insertBefore(widget_stylesheet_tag, null);
        }
    }

    // Downloading widget stylesheet
    if (config.theme !== 'custom') {
        // Downloading fontawesome
        if (!config.hasFontawesome) {
            insertStylesheet(fontawesome_url);
        }

        insertStylesheet(widget_stylesheet_url);
    }

    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            if (request.status === 200) {
                render(JSON.parse(request.responseText));
            }
        }
    };

    request.open('GET', request_url, true);
    request.send();
})(document);