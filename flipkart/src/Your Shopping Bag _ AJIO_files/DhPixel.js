(function () {
    function p(a) {
        this.data = "";
        this.a = 0;
        if ("string" === typeof a) this.data = a;
        else if (b.D(a) || b.L(a)) {
            a = new Uint8Array(a);
            try {
                this.data = String.fromCharCode.apply(null, a);
            } catch (f) {
                for (var v = 0; v < a.length; ++v) this.M(a[v]);
            }
        } else if (
            a instanceof p ||
            ("object" === typeof a &&
                "string" === typeof a.data &&
                "number" === typeof a.a)
        )
            (this.data = a.data), (this.a = a.a);
        this.v = 0;
    }
    function w(a, f, b) {
        for (var d, c, h, m, g, k, e, r, n, l, t, q, u, p = b.length(); 64 <= p;) {
            for (g = 0; 16 > g; ++g) f[g] = b.getInt32();
            for (; 64 > g; ++g)
                (d = f[g - 2]),
                    (d =
                        ((d >>> 17) | (d << 15)) ^ ((d >>> 19) | (d << 13)) ^ (d >>> 10)),
                    (c = f[g - 15]),
                    (c = ((c >>> 7) | (c << 25)) ^ ((c >>> 18) | (c << 14)) ^ (c >>> 3)),
                    (f[g] = (d + f[g - 7] + c + f[g - 16]) | 0);
            k = a.g;
            e = a.h;
            r = a.i;
            n = a.j;
            l = a.l;
            t = a.m;
            q = a.o;
            u = a.s;
            for (g = 0; 64 > g; ++g)
                (d =
                    ((l >>> 6) | (l << 26)) ^
                    ((l >>> 11) | (l << 21)) ^
                    ((l >>> 25) | (l << 7))),
                    (h = q ^ (l & (t ^ q))),
                    (c =
                        ((k >>> 2) | (k << 30)) ^
                        ((k >>> 13) | (k << 19)) ^
                        ((k >>> 22) | (k << 10))),
                    (m = (k & e) | (r & (k ^ e))),
                    (d = u + d + h + x[g] + f[g]),
                    (c += m),
                    (u = q),
                    (q = t),
                    (t = l),
                    (l = (n + d) | 0),
                    (n = r),
                    (r = e),
                    (e = k),
                    (k = (d + c) | 0);
            a.g = (a.g + k) | 0;
            a.h = (a.h + e) | 0;
            a.i = (a.i + r) | 0;
            a.j = (a.j + n) | 0;
            a.l = (a.l + l) | 0;
            a.m = (a.m + t) | 0;
            a.o = (a.o + q) | 0;
            a.s = (a.s + u) | 0;
            p -= 64;
        }
    }
    var m,
        y,
        e,
        b = (m = m || {});
    b.D = function (a) {
        return "undefined" !== typeof ArrayBuffer && a instanceof ArrayBuffer;
    };
    b.L = function (a) {
        return a && b.D(a.buffer) && void 0 !== a.byteLength;
    };
    b.G = p;
    b.b = p;
    b.b.prototype.H = function (a) {
        this.v += a;
        4096 < this.v && (this.v = 0);
    };
    b.b.prototype.length = function () {
        return this.data.length - this.a;
    };
    b.b.prototype.M = function (a) {
        this.u(String.fromCharCode(a));
    };
    b.b.prototype.u = function (a) {
        this.data += a;
        this.H(a.length);
    };
    b.b.prototype.c = function (a) {
        this.u(
            String.fromCharCode((a >> 24) & 255) +
            String.fromCharCode((a >> 16) & 255) +
            String.fromCharCode((a >> 8) & 255) +
            String.fromCharCode(a & 255)
        );
    };
    b.b.prototype.getInt16 = function () {
        var a =
            (this.data.charCodeAt(this.a) << 8) ^ this.data.charCodeAt(this.a + 1);
        this.a += 2;
        return a;
    };
    b.b.prototype.getInt32 = function () {
        var a =
            (this.data.charCodeAt(this.a) << 24) ^
            (this.data.charCodeAt(this.a + 1) << 16) ^
            (this.data.charCodeAt(this.a + 2) << 8) ^
            this.data.charCodeAt(this.a + 3);
        this.a += 4;
        return a;
    };
    b.b.prototype.B = function () {
        return this.data.slice(this.a);
    };
    b.b.prototype.compact = function () {
        0 < this.a && ((this.data = this.data.slice(this.a)), (this.a = 0));
        return this;
    };
    b.b.prototype.clear = function () {
        this.data = "";
        this.a = 0;
        return this;
    };
    b.b.prototype.truncate = function (a) {
        a = Math.max(0, this.length() - a);
        this.data = this.data.substr(this.a, a);
        this.a = 0;
        return this;
    };
    b.b.prototype.N = function () {
        for (var a = "", f = this.a; f < this.data.length; ++f) {
            var b = this.data.charCodeAt(f);
            16 > b && (a += "0");
            a += b.toString(16);
        }
        return a;
    };
    b.b.prototype.toString = function () {
        return b.I(this.B());
    };
    b.createBuffer = function (a, f) {
        void 0 !== a && "utf8" === (f || "raw") && (a = b.C(a));
        return new b.G(a);
    };
    b.J = function () {
        for (var a = String.fromCharCode(0), b = 64, e = ""; 0 < b;)
            b & 1 && (e += a), (b >>>= 1), 0 < b && (a += a);
        return e;
    };
    b.C = function (a) {
        return unescape(encodeURIComponent(a));
    };
    b.I = function (a) {
        return decodeURIComponent(escape(a));
    };
    b.K = function (a) {
        for (var b = 0; b < a.length; b++) if (a.charCodeAt(b) >>> 8) return !0;
        return !1;
    };
    var z = (y = y || {});
    e = e || {};
    e.A = e.A || {};
    e.F = e.A.F = z;
    z.create = function () {
        A ||
            ((n = String.fromCharCode(128)),
                (n += m.J()),
                (x = [
                    1116352408,
                    1899447441,
                    3049323471,
                    3921009573,
                    961987163,
                    1508970993,
                    2453635748,
                    2870763221,
                    3624381080,
                    310598401,
                    607225278,
                    1426881987,
                    1925078388,
                    2162078206,
                    2614888103,
                    3248222580,
                    3835390401,
                    4022224774,
                    264347078,
                    604807628,
                    770255983,
                    1249150122,
                    1555081692,
                    1996064986,
                    2554220882,
                    2821834349,
                    2952996808,
                    3210313671,
                    3336571891,
                    3584528711,
                    113926993,
                    338241895,
                    666307205,
                    773529912,
                    1294757372,
                    1396182291,
                    1695183700,
                    1986661051,
                    2177026350,
                    2456956037,
                    2730485921,
                    2820302411,
                    3259730800,
                    3345764771,
                    3516065817,
                    3600352804,
                    4094571909,
                    275423344,
                    430227734,
                    506948616,
                    659060556,
                    883997877,
                    958139571,
                    1322822218,
                    1537002063,
                    1747873779,
                    1955562222,
                    2024104815,
                    2227730452,
                    2361852424,
                    2428436474,
                    2756734187,
                    3204031479,
                    3329325298,
                ]),
                (A = !0));
        var a = null,
            b = m.createBuffer(),
            e = Array(64),
            d = {
                algorithm: "sha256",
                O: 64,
                P: 32,
                w: 0,
                f: [0, 0],
                start: function () {
                    d.w = 0;
                    d.f = [0, 0];
                    b = m.createBuffer();
                    a = {
                        g: 1779033703,
                        h: 3144134277,
                        i: 1013904242,
                        j: 2773480762,
                        l: 1359893119,
                        m: 2600822924,
                        o: 528734635,
                        s: 1541459225,
                    };
                    return d;
                },
            };
        d.start();
        d.update = function (c, h) {
            "utf8" === h && (c = m.C(c));
            d.w += c.length;
            d.f[0] += (c.length / 4294967296) >>> 0;
            d.f[1] += c.length >>> 0;
            b.u(c);
            w(a, e, b);
            (2048 < b.a || 0 === b.length()) && b.compact();
            return d;
        };
        d.digest = function () {
            var c = m.createBuffer();
            c.u(b.B());
            c.u(n.substr(0, 64 - ((d.f[1] + 8) & 63)));
            c.c((d.f[0] << 3) | (d.f[0] >>> 28));
            c.c(d.f[1] << 3);
            var h = {
                g: a.g,
                h: a.h,
                i: a.i,
                j: a.j,
                l: a.l,
                m: a.m,
                o: a.o,
                s: a.s,
            };
            w(h, e, c);
            c = m.createBuffer();
            c.c(h.g);
            c.c(h.h);
            c.c(h.i);
            c.c(h.j);
            c.c(h.l);
            c.c(h.m);
            c.c(h.o);
            c.c(h.s);
            return c;
        };
        return d;
    };
    var n = null,
        A = !1,
        x = null,
        dt, expires;
    dt = new Date();
    dt.setTime(dt.getTime() + (730 * 24 * 60 * 60 * 1000));
    expires = "; expires=" + dt.toGMTString();
    function isAlreadyHashed(input){
        return input && (input.match('^[A-Fa-f0-9]{64}$') != null);
      }
    window.forge_sha256 = function (a) {
        if (a == null || a == undefined || a == 'undefined' || isAlreadyHashed(String(a))) {
            return a;
        }
            var f = e.F.create();
            f.update(a, b.K(a) ? "utf8" : void 0);
            return f.digest().N();

    };
    function date_format(date_value) {
        if (/^(([1-9]|0[1-9]|1[0-2])\/([1-9]|0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}|[nN]\/[aA])$|^(?:\d{4}[-\/])(?:0?[1-9]|1[0-2])[-\/](?:0?[1-9]|[12][0-9]|3[01])$|(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}\D?)?\D?((19[7-9]\d|20\d{2})|\d{2})/.test(date_value)) {
            return (date_value.split("-").reverse().join(""));
        } else if (/([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/.test(date_value)) {
            return (date_value.split("-").join(""))
        }
    }
    function setCookiefunc(cname, cval) {
        document.cookie = cname + "=" + cval + ";path=/;domain=.ajio.com" + expires + "; SameSite = none; Secure";

    }
    function setClickId(clickId, name){
        var urlSearchParams = new URLSearchParams(window.location.search);
        var clickIdValue = urlSearchParams.get(clickId);
        if (clickIdValue) {
          var expirationDate = new Date();
          expirationDate.setTime(expirationDate.getTime() + (30*24*60*60*1000));
          document.cookie = name + "=" + clickIdValue + ";path=/;domain=.ajio.com" + ";expires="+ expirationDate.toUTCString() + "; SameSite = none; Secure";
        }
    }

    function set_phone(setPh) {
        if (setPh != "") setCookiefunc('th_capi_ph', forge_sha256(setPh));
    }

    function set_email(setEm) {
        if (setEm != "") setCookiefunc('th_capi_em', forge_sha256(setEm));
    }

    function set_ge(setGe) {
        if (setGe != "") setCookiefunc('th_capi_ge', forge_sha256(setGe));
    }

    function set_dob(setDob) {
        if (setDob != "") setCookiefunc('th_capi_db', forge_sha256(setDob));
    }

    function set_fn(setFn){
        if(setFn!="") setCookiefunc('th_capi_fn', forge_sha256(setFn));
    }

    function set_ln(setLn){
        if(setLn!="") setCookiefunc('th_capi_ln', forge_sha256(setLn));
    }

    window.set_userparmas = function () {


        var final_result = {};
        var full_name = '';
        var date_regex = /^(([1-9]|0[1-9]|1[0-2])\/([1-9]|0[1-9]|1\d|2\d|3[01])\/(19|20)\d{2}|[nN]\/[aA])$|^(?:\d{4}[-\/])(?:0?[1-9]|1[0-2])[-\/](?:0?[1-9]|[12][0-9]|3[01])$|(\b\d{1,2}\D{0,3})?\b(?:Jan(?:uary)?|Feb(?:ruary)?|Mar(?:ch)?|Apr(?:il)?|May|Jun(?:e)?|Jul(?:y)?|Aug(?:ust)?|Sep(?:tember)?|Oct(?:ober)?|(Nov|Dec)(?:ember)?)\D?(\d{1,2}\D?)?\D?((19[7-9]\d|20\d{2})|\d{2})/;

        var email_regex = /^[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+(:?\.[\w!#\$%&\'\*\+\/\=\?\^`\{\|\}~\-]+)*@(?:[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9\-]*[a-z0-9])?$/i;///^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        var phone_regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{2,6}$/;

        var j;
        var f_name_flag = 0;
        var data_value;
        setClickId("ttclid","ttclid")
        setClickId("ScCid","sccid")
        setClickId("twclid","_twclid")

        document.addEventListener('change', function (e) {

            switch (e.target.getAttribute('type')) {
                case 'text':
                    if (phone_regex.test((e.target.value).split(" ").join(""))) {
                        final_result['phone'] = e.target.value.replace(/[\-\s]+/g, "").replace(/^\+?0{0,2}/, "");
                    } else if (email_regex.test(e.target.value)) {
                        final_result['email'] = (e.target.value).toLowerCase();
                    } else if ( e.target.getAttribute('name') != null && e.target.value != "") {

					  if(e.target.getAttribute('name').toLocaleLowerCase().includes('name') || e.target.getAttribute('name').toLocaleLowerCase().includes('cust')){
                        if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();
                        } else {
                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;
                        }
					  }
                    } else if (e.target.getAttribute('name') == null && e.target.getAttribute('id') != null && e.target.value != "" && e.target.getAttribute('id').toLocaleLowerCase().includes('name') ) {
                        if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();
                        } else {
                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;
                        }
                    } else if (e.target.getAttribute('placeholder') != null && e.target.value != "" && e.target.getAttribute('placeholder').toLocaleLowerCase().includes('name') ) {
                        if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();
                        } else {
                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;
                        }
                    } else if(e.target.getAttribute('name') == null && e.target.getAttribute('id') == null && e.target.getAttribute('placeholder') == null && e.target.getAttribute('class') != null && e.target.value != "" && e.target.getAttribute('class').toLocaleLowerCase().includes('name')){
					    if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();

                        } else {

                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;

                        }

					} else if(e.target.getAttribute('name') == null && e.target.getAttribute('id') == null && e.target.getAttribute('data-fieldtype') != null && e.target.value != "" && e.target.getAttribute('data-fieldtype').toLocaleLowerCase().includes('name')){
					    if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();

                        } else {

                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;

                        }

					}  else if(e.target.getAttribute('data-val-required') != null&& e.target.value != "" && e.target.getAttribute('data-val-required').toLocaleLowerCase().includes('name')){
					    if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();

                        } else {

                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;

                        }

					} else if (date_regex.test(e.target.value)) {
					    data_value = e.target.value
                        date_value = data_value.replaceAll('/', '-') ? data_value.replaceAll('/', '-') : data_value
                        final_result['dob'] = date_format(date_value);
                    }
                    break;
                case 'email':
                    if (email_regex.test(e.target.value)) {
                        final_result['email'] = (e.target.value).toLowerCase();
                    }
                    break;
                case 'phone':
                    if (phone_regex.test((e.target.value).split(" ").join(""))) {
                        final_result['phone'] = e.target.value.replace(/[\-\s]+/g, "").replace(/^\+?0{0,2}/, "");
                    }
                    break;
                case 'tel':
                    if (phone_regex.test((e.target.value).split(" ").join(""))) {
                        final_result['phone'] = e.target.value.replace(/[\-\s]+/g, "").replace(/^\+?0{0,2}/, "");
                    }
                    break;
                case 'number':
                    if (phone_regex.test((e.target.value).split(" ").join(""))) {
                        final_result['phone'] = e.target.value.replace(/[\-\s]+/g, "").replace(/^\+?0{0,2}/, "");
                    }
                    break;
                case 'radio':
                    if (e.target.checked == true && e.target.value == "m") {
                        final_result['gender'] = e.target.value
                    } else if (e.target.checked == true && e.target.value == "f") {
                        final_result['gender'] = e.target.value
                    }
                    else if (e.target.value.toLowerCase() == "female") {
                        final_result['gender'] = "f"
                    } else if (e.target.value.toLowerCase() == "male") {
                        final_result['gender'] = "m"
                    }
                case 'checkbox':
                    if (e.target.checked == true && e.target.value == "m") {
                        final_result['gender'] = e.target.value
                    } else if (e.target.checked == true && e.target.value == "f") {
                        final_result['gender'] = e.target.value
                    }
                    else if (e.target.value.toLowerCase() == "female") {
                        final_result['gender'] = "f"
                    } else if (e.target.value.toLowerCase() == "male") {
                        final_result['gender'] = "m"
                    }
                case 'date':
                    if (date_regex.test(e.target.value)) {
					    data_value = e.target.value
                        date_value = data_value.replaceAll('/', '-')
                        final_result['dob'] = date_format(date_value);
                    }
                default:
            }

            if (phone_regex.test((e.target.value).split(" ").join(""))) {
                final_result['phone'] = e.target.value.replace(/[\-\s]+/g, "").replace(/^\+?0{0,2}/, "");
            }

            if (email_regex.test(e.target.value)) {
                final_result['email'] = (e.target.value).toLowerCase();
            }

            if (e.target.getAttribute('name') != null && e.target.value != "" && e.target.getAttribute('name').toLocaleLowerCase().includes('name') ) {
                if (f_name_flag == 1) {
                    final_result['last_name'] = (e.target.value).split(' ').pop();
                } else {
                    full_name += e.target.value;
                    final_result['firstname'] = full_name.split(' ')[0];
                    f_name_flag = 1;
                }
            } else if (e.target.getAttribute('name') == null && e.target.getAttribute('id') != null && e.target.value != "" && e.target.getAttribute('id').toLocaleLowerCase().includes('name') ) {
                if (f_name_flag == 1) {
                    final_result['last_name'] = (e.target.value).split(' ').pop();
                } else {
                    full_name += e.target.value;
                    final_result['firstname'] = full_name.split(' ')[0];
                    f_name_flag = 1;
                }
            } else if (e.target.getAttribute('placeholder') != null && e.target.value != "" && e.target.getAttribute('placeholder').toLocaleLowerCase().includes('name') ) {
                      if (f_name_flag == 1) {
                            final_result['last_name'] = (e.target.value).split(' ').pop();
                      } else {
                            full_name += e.target.value;
                            final_result['firstname'] = full_name.split(' ')[0];
                            f_name_flag = 1;
                  }
             }

            if (final_result.phone) {
                var country_code = null
                if(country_code){
                    var final_phone;
                    final_phone = String(country_code) + String(final_result.phone);
                    final_phone = final_phone.trim();
                    final_phone = final_phone.replace("+","");
                    final_phone = final_phone.replace(" ","");
                    final_phone = final_phone.replace("-","");
                    if(final_phone.toString().length <= 13){
                       final_result.phone = final_phone;
                    }
                }
                set_phone(final_result.phone)
            }
            if (final_result.email) {
                set_email(final_result.email)
            }
            if (final_result.gender) {
                set_ge(final_result.gender)
            }
            if (final_result.dob) {
                set_dob(final_result.dob)
            }
            if (final_result.firstname) {
                set_fn(final_result.firstname)
            }
            if (final_result.last_name) {
                set_ln(final_result.last_name)
            }
        });
    }

})();
!(function () {
    window.get_userparmas = function () {

        var userparams = {};
        userparams.ph = e('th_capi_ph')
        userparams.em = e('th_capi_em')
        userparams.fn = e('th_capi_fn')
        userparams.ln = e('th_capi_ln')
        userparams.db = e('th_capi_db')
        userparams.ge = e('th_capi_ge')

        for(var key in userparams){
            if(userparams.hasOwnProperty(key) && userparams[key] ==null){
                delete userparams[key]
            }
        }
        return userparams;

    }
    function e(e) {
        for (
            var t = e + "=",
            n = decodeURIComponent(document.cookie).split(";"),
            a = 0;
            a < n.length;
            a++
        ) {
            for (var r = n[a]; " " == r.charAt(0);) r = r.substring(1);
            if (0 == r.indexOf(t)) return r.substring(t.length, r.length);
        }
        return "";
    }
    function t(e) {
        var t = {};
        if (!e || "object" != typeof e) return t;
        for (var key in e) {

            if (key == 'em' || 'fn' || 'ph' || 'ln' || 'ge' || 'db' || 'ct' || 'st' || 'zp' || 'country') {
                t[key] = forge_sha256(e[key])

            } else {
                t[key] = e[key]
            }

        }
        return t;
    }
    function setID(name, value, day){
        var expirationDate = new Date();
        expirationDate.setTime(expirationDate.getTime() + (day*24*60*60*1000));
        document.cookie = name + "=" + value + ";path=/;domain=.ajio.com" + ";expires="+ expirationDate.toUTCString() + "; SameSite = none; Secure";
    }
    function setFbc(value, name){
        var clickIdValue;
        if(name == "fbc"){
            clickIdValue = value;
        }
        if(name == "fbclid"){
            clickIdValue = "fb.1."+Math.floor(+new Date())+"."+value;
        }
        if (clickIdValue) {
          setID("th_capi_fbc", clickIdValue, 90);
        }
    }
    function setExternalId(){
        var id = crypto.randomUUID();
        if(id){
            setID("th_external_id", forge_sha256(id), 730);
        }
    }
    ! function(n, e) {
        "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.clientParamBuilder = e() : n.clientParamBuilder = e()
    }(this, (() => (() => {
        "use strict";
        var n = {
                d: (e, r) => {
                    for (var t in r) n.o(r, t) && !n.o(e, t) && Object.defineProperty(e, t, {
                        enumerable: !0,
                        get: r[t]
                    })
                },
                o: (n, e) => Object.prototype.hasOwnProperty.call(n, e),
                r: n => {
                    "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(n, Symbol.toStringTag, {
                        value: "Module"
                    }), Object.defineProperty(n, "__esModule", {
                        value: !0
                    })
                }
            },
            e = {};
    
        function r(n, e) {
            var r = new RegExp("[?#&]" + e.replace(/[\[\]]/g, "\\$&") + "(=([^&#]*)|&|#|$)").exec(n);
            return r ? r[2] ? decodeURIComponent(r[2].replace(/\+/g, " ")) : "" : null
        }
    
        function t(n, e) {
            (null == e || e > n.length) && (e = n.length);
            for (var r = 0, t = Array(e); r < e; r++) t[r] = n[r];
            return t
        }
        n.r(e), n.d(e, {
            getFbc: () => x,
            getFbp: () => I,
            processAndCollectParams: () => w
        });
        var o = "fb",
            a = 4;
    
        function i(n, e, r) {
            return [o, n, e, r].join(".")
        }
        var l = 7776e6,
            u = 999999999;
    
        function c(n) {
            var e = [];
            try {
                for (var r = document.cookie.split(";"), t = "^\\s*".concat(n, "=\\s*(.*?)\\s*$"), o = new RegExp(t), a = 0; a < r.length; a++) {
                    var i = r[a].match(o);
                    i && e.push(i[1])
                }
                return e && e.length > 0 && "string" == typeof e[0] ? e[0] : ""
            } catch (n) {
                throw new Error("Fail to read from cookie: " + n.message)
            }
        }
    
        function f(n, e) {
            return n.slice(n.length - 1 - e).join(".")
        }
    
        function d(n, e, r) {
            var t, o, a, i, u, c, f = (t = l, new Date(Date.now() + Math.round(t)).toUTCString());
            if ("string" == typeof n && "string" == typeof e && "string" == typeof r) try {
                var d = encodeURIComponent(e);
                document.cookie = "".concat(n, "=").concat(d, ";") + "expires=".concat(f, ";") + "domain=.".concat(r, ";") + "".concat((o = window.chrome, i = (a = window.navigator).vendor, u = void 0 !== window.opr, c = a.userAgent.indexOf("Edg") > -1, a.userAgent.match("CriOS") || null == o || "Google Inc." !== i || !1 !== u || !1 !== c ? "" : "SameSite=Lax;")) + "path=/"
            } catch (n) {
                throw new Error("Fail to write cookie: " + n.message)
            }
        }
    
        function s(n) {
            var e = c(n);
            return "string" != typeof e || "" === e ? null : function(n) {
                var e = n.split(".");
                if (e.length !== a) return null;
                var r, i, l = (i = 4, function(n) {
                        if (Array.isArray(n)) return n
                    }(r = e) || function(n, e) {
                        var r = null == n ? null : "undefined" != typeof Symbol && n[Symbol.iterator] || n["@@iterator"];
                        if (null != r) {
                            var t, o, a, i, l = [],
                                u = !0,
                                c = !1;
                            try {
                                if (a = (r = r.call(n)).next, 0 === e) {
                                    if (Object(r) !== r) return;
                                    u = !1
                                } else
                                    for (; !(u = (t = a.call(r)).done) && (l.push(t.value), l.length !== e); u = !0);
                            } catch (n) {
                                c = !0, o = n
                            } finally {
                                try {
                                    if (!u && null != r.return && (i = r.return(), Object(i) !== i)) return
                                } finally {
                                    if (c) throw o
                                }
                            }
                            return l
                        }
                    }(r, i) || function(n, e) {
                        if (n) {
                            if ("string" == typeof n) return t(n, e);
                            var r = {}.toString.call(n).slice(8, -1);
                            return "Object" === r && n.constructor && (r = n.constructor.name), "Map" === r || "Set" === r ? Array.from(n) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? t(n, e) : void 0
                        }
                    }(r, i) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }()),
                    u = l[0],
                    c = l[1],
                    f = l[2],
                    d = l[3];
                if (u !== o) throw new Error("Unexpected version number '".concat(e[0], "'"));
                var s = parseInt(c, 10);
                if (isNaN(s)) throw new Error("Illegal subdomain index '".concat(e[1], "'"));
                var p = parseInt(f, 10);
                if (isNaN(p)) throw new Error("Illegal creation time '".concat(e[2], "'"));
                if (null == d || "" === d) throw new Error("Empty cookie payload");
                var m = {};
                return m.creationTime = p, m.payload = d, m.subdomainIndex = s, m
            }(e)
        }
    
        function p(n, e) {
            for (var r = window.location.hostname.split("."), t = 0; t < r.length; t++) {
                var o = f(r, t),
                    a = i(t, (new Date).getTime(), e);
                if (d(n, a, o), "" !== c(n)) return a
            }
            return null
        }
    
        function m(n, e) {
            var r = window.location.hostname.split(".");
            if (null == e.subdomainIndex || null == e.creationTime || null == e.payload) throw new Error(n + " only partially set on cookie.");
            var t = f(r, e.subdomainIndex),
                o = i(e.subdomainIndex, e.creationTime, e.payload);
            return d(n, o, t), o
        }
        var y = "fbclid",
            v = "_fbc",
            g = "fbc",
            h = "_fbp",
            b = "fbp";
    
        function w(n) {
            var e = {},
                t = function() {
                    var n = r(arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window.location.href, y);
                    if (null === n && (n = r(document.referrer, y)), null != n && n.length > 500) return null;
                    var e = s(v);
                    if (null != n) {
                        if (null == e) return p(v, n);
                        var t = function(n, e) {
                            if (null === n || n.payload !== e) {
                                var r = {};
                                r.payload = e;
                                var t = Date.now();
                                return r.creationTime = "number" == typeof t ? t : (new Date).getTime(), r.subdomainIndex = n.subdomainIndex, r
                            }
                            return n
                        }(e, n);
                        return m(v, t)
                    }
                    return null != e ? m(v, e) : e
                }(n),
                o = function() {
                    var n = s(h);
                    if (null != n) return m(h, n);
                    var e, r, t = (e = Math.floor(Math.random() * u), r = Math.floor(Math.random() * u), e.toString() + r.toString());
                    return p(h, t)
                }();
            return null != t && (e[g] = t), null != o && (e[b] = o), e
        }
    
        function x() {
            return c(v)
        }
    
        function I() {
            return c(h)
        }
        return e
    })()));
    set_userparmas()
    if (typeof(clientParamBuilder)!="undefined") {
        clientParamBuilder.processAndCollectParams();
    }
    var n = window.dhPixel;
    for (
        n.advanced_matching = null,
        n.callMethod = function () {
            var a = arguments[0],
                r = a[0].toLowerCase(),
                i = a[1],
                o = a[2] || get_userparmas(),
                c = a[3];
            c1 = a[4];
            if ("init" === r)
                return (
                    (n.pixel_id = i),
                    n.pixel_id,
                    (n.external_id = o && o.external_id),
                    n.external_id,
                    void (o && !n.advanced_matching && (n.advanced_matching = t(o)))
                );
            if ("tracksingle" === r || "tracksinglecustom" === r) {
                n.pixel_id = i
            }
            var urlSearchParams = new URLSearchParams(window.location.search);
            var fbclid = urlSearchParams.get("fbclid");
            if(fbclid){
                setFbc(fbclid, "fbclid")
            }
			var blacklistedpixels = ["524320038082149"];
            var blacklistedevent = [];
            var whitelistedevents = ["ViewContent", "AddToCart", "Purchase"];
			if (blacklistedpixels.includes(n.pixel_id) || blacklistedpixels.includes(i)) return;
			if (blacklistedevent.includes(i) || blacklistedevent.includes(o)) return;
			if (!(whitelistedevents.includes(i) || whitelistedevents.includes(o))) return;
            if((window.location.href).indexOf("gtm-msr.appspot.com") != -1) return;
            if ("track" === r || "trackcustom" === r || "tracksingle" === r || "tracksinglecustom" === r) {
                if (!n.pixel_id) return;

                a[0];
                var h = {};
                
                var extrnl_id = e('th_external_id')
                if(!extrnl_id){
                    setExternalId();
                }

                if ("track" === r || "trackcustom" === r) {
                    var f = c && c.eventID;


                    h = {
                        id: n.pixel_id,
                        ev: i,
                        et: Math.floor(+new Date() / 1e3),
                        es: window.location.href,
                        referrer: document.referrer,
                        eid: f,
                        ua: navigator.userAgent,
                    };
                    if (typeof(clientParamBuilder)!="undefined") {
                        clientParamBuilder.processAndCollectParams();
                        h.fbp = clientParamBuilder.getFbp()
                        h.fbc = clientParamBuilder.getFbc()
                    }
                    // e('_fbp')!= null?h.fbp=e('_fbp'):''
                    e('_scid')!= null?h.uuid_c1=e('_scid'):''
                    e('_ttp')!= null?h.ttp=e('_ttp'):''
                    // e('_fbc')!= null?h.fbc=e('_fbc'):''
                    e('th_capi_fbc')!= null?h.th_fbc=e('th_capi_fbc'):''
                    e('ttclid')!= null?h.ttclid=e('ttclid'):''
                    e('sccid')!= null?h.click_id=e('sccid'):''
                    e('_twclid')!= null?h.twitter_clickid=e('_twclid'):''
                    e('_epik')!= null?h.epik=e('_epik'):''
                    e("th_capi_fn") !=null? h["ud[fn]"] = e('th_capi_fn') : h["ud[fn]"]=null
                    e("th_capi_ln") !=null? h["ud[ln]"] = e('th_capi_ln') : h["ud[ln]"]=null
                    e("th_capi_em") !=null? h["ud[em]"] = e('th_capi_em') : h["ud[em]"]=null
                    e("th_capi_ph") !=null? h["ud[ph]"] = e('th_capi_ph') : h["ud[ph]"]=null
                    e("th_capi_ge") !=null? h["ud[ge]"] = e('th_capi_ge') : h["ud[ge]"]=null
                    e("th_capi_db") !=null? h["ud[db]"] = e('th_capi_db') : h["ud[db]"]=null
                    e("th_external_id") !=null? h["external_id"] = e('th_external_id') : h["external_id"]=null
                    e("nt_segments") !=null? h["cd[nt_segments]"] = e('nt_segments') : h["cd[nt_segments]"]=null
                    if(n.external_id){h["ud[external_id]"] =  n.external_id}
                    
                    
                    if ("object" == typeof o) for (var u in o) if (!/^em$|^ph$|^fn$|^ln$|^db$|^ge$|^ct$|^st$|^zp$|^country$|^external_id$/.test(u)) h["cd[" + u + "]"] = o[u];
                    Object.keys(h).forEach((k) => {typeof h[k]!="number" ? h[k] == '' && delete h[k] : h[k]});

                    var http = new XMLHttpRequest();
                    var url = "https://capi.ajio.com/tr?" + (function (e) {
                        var t = [];
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var a = e[n];
                                if (
                                    "number" != typeof a &&
                                    "boolean" != typeof a &&
                                    "string" != typeof a
                                  ) {
                                    a = JSON.stringify(a);
                                  }
                                  a = encodeURIComponent(a);
                                  t.push(encodeURIComponent(n) + "=" + a);
                            }
                        return t.join("&");
                    })(h)
                    
                    http.open('GET',url);
                    http.send();

                }
                if ("tracksingle" === r || "tracksinglecustom" === r) {
                    var cds = a[3]
                    var f = c1 && c1.eventID;
                    h = {
                        id: i,
                        ev: o,
                        et: Math.floor(+new Date() / 1e3),
                        es: window.location.href,
                        referrer: document.referrer,
                        eid: f,
                        ua: navigator.userAgent,
                    };
                    if (typeof(clientParamBuilder)!="undefined") {
                        clientParamBuilder.processAndCollectParams();
                        h.fbp = clientParamBuilder.getFbp()
                        h.fbc = clientParamBuilder.getFbc()
                    }
                    // e('_fbp')!= null?h.fbp=e('_fbp'):''
                    // e('_fbc')!= null?h.fbc=e('_fbc'):''
                    e('th_capi_fbc')!= null?h.th_fbc=e('th_capi_fbc'):''
                    e('ttclid')!= null?h.ttclid=e('ttclid'):''
                    e('sccid')!= null?h.click_id=e('sccid'):''
                    e('_twclid')!= null?h.twitter_clickid=e('_twclid'):''
                    e('_epik')!= null?h.epik=e('_epik'):''
                    e('_scid')!= null?h.uuid_c1=e('_scid'):''
                    e('_ttp')!= null?h.ttp=e('_ttp'):''
                    e("th_capi_fn") !=null? h["ud[fn]"] = e('th_capi_fn') : h["ud[fn]"]=null
                    e("th_capi_ln") !=null? h["ud[ln]"] = e('th_capi_ln') : h["ud[ln]"]=null
                    e("th_capi_em") !=null? h["ud[em]"] = e('th_capi_em') : h["ud[em]"]=null
                    e("th_capi_ph") !=null? h["ud[ph]"] = e('th_capi_ph') : h["ud[ph]"]=null
                    e("th_capi_ge") !=null? h["ud[ge]"] = e('th_capi_ge') : h["ud[ge]"]=null
                    e("th_capi_db") !=null? h["ud[db]"] = e('th_capi_db') : h["ud[db]"]=null
                    e("nt_segments") !=null? h["cd[nt_segments]"] = e('nt_segments') : h["cd[nt_segments]"]=null
                    e("th_external_id") !=null? h["external_id"] = e('th_external_id') : h["external_id"]=null
                    if(n.external_id){h["ud[external_id]"] =  n.external_id}

                    if ("object" == typeof cds) for (var u in cds) h["cd[" + u + "]"] = cds[u];
                    Object.keys(h).forEach((k) => {typeof h[k]!="number" ? h[k] == '' && delete h[k] : h[k]});




                    var http = new XMLHttpRequest();
                    var url = "https://capi.ajio.com/tr?" + (function (e) {
                        var t = [];
                        for (var n in e)
                            if (e.hasOwnProperty(n)) {
                                var a = e[n];
                                if (
                                    "number" != typeof a &&
                                    "boolean" != typeof a &&
                                    "string" != typeof a
                                  ) {
                                    a = JSON.stringify(a);
                                  }
                                  a = encodeURIComponent(a);
                                  t.push(encodeURIComponent(n) + "=" + a);
                            }
                        return t.join("&");
                    })(h)
                    
                    http.open('GET',url);
                    http.send();


                }


            }
        },
        n.queue.reverse();
        n.queue.length > 0;

    )
        n.callMethod.apply(n, n.queue.pop());

})();