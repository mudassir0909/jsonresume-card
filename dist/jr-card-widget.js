var jr_tmpl = (function(){
function encodeHTMLSource() {  var encodeHTMLRules = { "&": "&#38;", "<": "&#60;", ">": "&#62;", '"': '&#34;', "'": '&#39;', "/": '&#47;' },  matchHTML = /&(?!#?w+;)|<|>|"|'|\//g;  return function() {    return this ? this.replace(matchHTML, function(m) {return encodeHTMLRules[m] || m;}) : this;  };};
String.prototype.encodeHTML=encodeHTMLSource();
var tmpl = {};
  tmpl['jr-card-template']=function anonymous(it) {
var out='<div class="jr-card-theme-default"><div class="jr-card"><div class="jr-header"><div class="jr-cover"><div class="jr-profile-picture-container"><img src="'+(it.profile_image)+'"/></div><h2 class="jr-display-name">'+(it.display_name)+'</h2></div><div class="jr-experience-info"><p>'+(it.designation)+'</p><p><small><i class="fa fa-location-arrow"></i>'+(it.location)+'</small></p><p><small><i class="fa fa-envelope"></i>'+(it.email)+'</small></p></div></div><div class="jr-content"><div class="jr-stats">';if(it.stats.total_experience > 0){out+='<div class="jr-stat"><span><span class="jr-numbers">'+(it.stats.total_experience)+'+ years</span><br/><small><i class="fa fa-building"></i>Experience</small></span></div>';}if(it.stats.total_awards > 0){out+='<div class="jr-stat"><span><span class="jr-numbers">'+(it.stats.total_awards)+'</span><br/><small><i class="fa fa-trophy"></i>Awards</small></span></div>';}if(it.stats.total_publications > 0){out+='<div class="jr-stat"><span><span class="jr-numbers">'+(it.stats.total_publications)+'</span><br/><small><i class="fa fa-book"></i>Publications</small></span></div>';}if(it.stats.total_skills > 0){out+='<div class="jr-stat"><span><span class="jr-numbers">'+(it.stats.total_skills)+'</span><br/><small><i class="fa fa-code"></i>Skills</small></span></div>';}if(it.stats.total_references > 0){out+='<div class="jr-stat"><span><span class="jr-numbers">'+(it.stats.total_references)+'</span><br/><small><i class="fa fa-thumbs-up"></i>References</small></span></div>';}out+='</div><div class="jr-about">'+(it.about)+'</div></div><div class="jr-footer"><div class="jr-social-links">';var arr1=it.social_links;if(arr1){var social_link,index=-1,l1=arr1.length-1;while(index<l1){social_link=arr1[index+=1];out+='<div class="jr-social-link"><a href="'+(social_link.url)+'" target="_blank"><i class="fa fa-'+(social_link.network)+'"></i></a></div>';} } out+='<small><a href="'+(it.profile_url)+'" target="_blank" class="jr-profile-link">View complete resume</a></small></div></div></div></div>';return out;
};
return tmpl;})();
// Source: http://www.deluxeblogtips.com/2010/04/get-gravatar-using-only-javascript.html

(function() {
    window.getGravatar = function(email, size) {

        // MD5 (Message-Digest Algorithm) by WebToolkit
        //

        var MD5=function(s){function L(k,d){return(k<<d)|(k>>>(32-d))}function K(G,k){var I,d,F,H,x;F=(G&2147483648);H=(k&2147483648);I=(G&1073741824);d=(k&1073741824);x=(G&1073741823)+(k&1073741823);if(I&d){return(x^2147483648^F^H)}if(I|d){if(x&1073741824){return(x^3221225472^F^H)}else{return(x^1073741824^F^H)}}else{return(x^F^H)}}function r(d,F,k){return(d&F)|((~d)&k)}function q(d,F,k){return(d&k)|(F&(~k))}function p(d,F,k){return(d^F^k)}function n(d,F,k){return(F^(d|(~k)))}function u(G,F,aa,Z,k,H,I){G=K(G,K(K(r(F,aa,Z),k),I));return K(L(G,H),F)}function f(G,F,aa,Z,k,H,I){G=K(G,K(K(q(F,aa,Z),k),I));return K(L(G,H),F)}function D(G,F,aa,Z,k,H,I){G=K(G,K(K(p(F,aa,Z),k),I));return K(L(G,H),F)}function t(G,F,aa,Z,k,H,I){G=K(G,K(K(n(F,aa,Z),k),I));return K(L(G,H),F)}function e(G){var Z;var F=G.length;var x=F+8;var k=(x-(x%64))/64;var I=(k+1)*16;var aa=Array(I-1);var d=0;var H=0;while(H<F){Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=(aa[Z]|(G.charCodeAt(H)<<d));H++}Z=(H-(H%4))/4;d=(H%4)*8;aa[Z]=aa[Z]|(128<<d);aa[I-2]=F<<3;aa[I-1]=F>>>29;return aa}function B(x){var k="",F="",G,d;for(d=0;d<=3;d++){G=(x>>>(d*8))&255;F="0"+G.toString(16);k=k+F.substr(F.length-2,2)}return k}function J(k){k=k.replace(/rn/g,"n");var d="";for(var F=0;F<k.length;F++){var x=k.charCodeAt(F);if(x<128){d+=String.fromCharCode(x)}else{if((x>127)&&(x<2048)){d+=String.fromCharCode((x>>6)|192);d+=String.fromCharCode((x&63)|128)}else{d+=String.fromCharCode((x>>12)|224);d+=String.fromCharCode(((x>>6)&63)|128);d+=String.fromCharCode((x&63)|128)}}}return d}var C=Array();var P,h,E,v,g,Y,X,W,V;var S=7,Q=12,N=17,M=22;var A=5,z=9,y=14,w=20;var o=4,m=11,l=16,j=23;var U=6,T=10,R=15,O=21;s=J(s);C=e(s);Y=1732584193;X=4023233417;W=2562383102;V=271733878;for(P=0;P<C.length;P+=16){h=Y;E=X;v=W;g=V;Y=u(Y,X,W,V,C[P+0],S,3614090360);V=u(V,Y,X,W,C[P+1],Q,3905402710);W=u(W,V,Y,X,C[P+2],N,606105819);X=u(X,W,V,Y,C[P+3],M,3250441966);Y=u(Y,X,W,V,C[P+4],S,4118548399);V=u(V,Y,X,W,C[P+5],Q,1200080426);W=u(W,V,Y,X,C[P+6],N,2821735955);X=u(X,W,V,Y,C[P+7],M,4249261313);Y=u(Y,X,W,V,C[P+8],S,1770035416);V=u(V,Y,X,W,C[P+9],Q,2336552879);W=u(W,V,Y,X,C[P+10],N,4294925233);X=u(X,W,V,Y,C[P+11],M,2304563134);Y=u(Y,X,W,V,C[P+12],S,1804603682);V=u(V,Y,X,W,C[P+13],Q,4254626195);W=u(W,V,Y,X,C[P+14],N,2792965006);X=u(X,W,V,Y,C[P+15],M,1236535329);Y=f(Y,X,W,V,C[P+1],A,4129170786);V=f(V,Y,X,W,C[P+6],z,3225465664);W=f(W,V,Y,X,C[P+11],y,643717713);X=f(X,W,V,Y,C[P+0],w,3921069994);Y=f(Y,X,W,V,C[P+5],A,3593408605);V=f(V,Y,X,W,C[P+10],z,38016083);W=f(W,V,Y,X,C[P+15],y,3634488961);X=f(X,W,V,Y,C[P+4],w,3889429448);Y=f(Y,X,W,V,C[P+9],A,568446438);V=f(V,Y,X,W,C[P+14],z,3275163606);W=f(W,V,Y,X,C[P+3],y,4107603335);X=f(X,W,V,Y,C[P+8],w,1163531501);Y=f(Y,X,W,V,C[P+13],A,2850285829);V=f(V,Y,X,W,C[P+2],z,4243563512);W=f(W,V,Y,X,C[P+7],y,1735328473);X=f(X,W,V,Y,C[P+12],w,2368359562);Y=D(Y,X,W,V,C[P+5],o,4294588738);V=D(V,Y,X,W,C[P+8],m,2272392833);W=D(W,V,Y,X,C[P+11],l,1839030562);X=D(X,W,V,Y,C[P+14],j,4259657740);Y=D(Y,X,W,V,C[P+1],o,2763975236);V=D(V,Y,X,W,C[P+4],m,1272893353);W=D(W,V,Y,X,C[P+7],l,4139469664);X=D(X,W,V,Y,C[P+10],j,3200236656);Y=D(Y,X,W,V,C[P+13],o,681279174);V=D(V,Y,X,W,C[P+0],m,3936430074);W=D(W,V,Y,X,C[P+3],l,3572445317);X=D(X,W,V,Y,C[P+6],j,76029189);Y=D(Y,X,W,V,C[P+9],o,3654602809);V=D(V,Y,X,W,C[P+12],m,3873151461);W=D(W,V,Y,X,C[P+15],l,530742520);X=D(X,W,V,Y,C[P+2],j,3299628645);Y=t(Y,X,W,V,C[P+0],U,4096336452);V=t(V,Y,X,W,C[P+7],T,1126891415);W=t(W,V,Y,X,C[P+14],R,2878612391);X=t(X,W,V,Y,C[P+5],O,4237533241);Y=t(Y,X,W,V,C[P+12],U,1700485571);V=t(V,Y,X,W,C[P+3],T,2399980690);W=t(W,V,Y,X,C[P+10],R,4293915773);X=t(X,W,V,Y,C[P+1],O,2240044497);Y=t(Y,X,W,V,C[P+8],U,1873313359);V=t(V,Y,X,W,C[P+15],T,4264355552);W=t(W,V,Y,X,C[P+6],R,2734768916);X=t(X,W,V,Y,C[P+13],O,1309151649);Y=t(Y,X,W,V,C[P+4],U,4149444226);V=t(V,Y,X,W,C[P+11],T,3174756917);W=t(W,V,Y,X,C[P+2],R,718787259);X=t(X,W,V,Y,C[P+9],O,3951481745);Y=K(Y,h);X=K(X,E);W=K(W,v);V=K(V,g)}var i=B(Y)+B(X)+B(W)+B(V);return i.toLowerCase()};

        var size = size || 80;

        return 'http://www.gravatar.com/avatar/' + MD5(email) + '.jpg?s=' + size;
    }
})();
(function(document) {
    var container = document.getElementById('jr-card-widget'),
        config = container.dataset,
        request = new XMLHttpRequest(),
        request_url = "//registry.jsonresume.org/" +
                      config.username + '.json',
        fontawesome_url = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.2.0/css/font-awesome.css",
        widget_stylesheet_url = "//mudassir0909.github.io/jsonresume-card/dist/1.0.0/jr-card-widget.min.css",
        profile_url = '//registry.jsonresume.org/' + config.username,
        today = new Date();

    function getDatePair(work_info) {
        var start_date = new Date(work_info.startDate),
            end_date = work_info.endDate ? new Date(work_info.endDate) :
                       today;

        return {
            start_date: start_date.getTime(),
            end_date: end_date.getTime(),
            company: work_info.company
        };
    }

    function removeOverlaps(date_pairs) {
        var dates_overlap, i, date_pair,
            previous_date_pair = date_pairs[0],
            consolidated_pairs = [previous_date_pair];

        for(i=1; i<date_pairs.length; i++) {
            date_pair = date_pairs[i];

            dates_overlap = (date_pair.start_date >= previous_date_pair.start_date &&
                                date_pair.start_date < previous_date_pair.end_date );

            if (dates_overlap) {
                previous_date_pair.end_date =
                    Math.max(date_pair.end_date, previous_date_pair.end_date);
            } else {
                consolidated_pairs.push(date_pair);
                previous_date_pair = date_pair;
            }
        }

        return consolidated_pairs;
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

            if (supported_networks.indexOf(network) >= 0 && (profile.url || profile.username)) {
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