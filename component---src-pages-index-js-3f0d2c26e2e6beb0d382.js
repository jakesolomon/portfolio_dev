(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{"4kAr":function(e,t,a){e.exports=a.p+"static/tutorstat-e68b64185a8e14f7bb796674936c2615.png"},"5N0+":function(e,t,a){},CWDZ:function(e,t,a){},DYfs:function(e,t,a){},IMjo:function(e,t,a){},KG43:function(e,t,a){},RXBc:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),r=a.n(n),o=(a("KG43"),a("NO0K"));var s=function(e){var t="";e.state.hero||(t="disappear");var a="hero "+t,n="hero-title "+t,s="hero-subtitle "+t;return r.a.createElement("div",null,r.a.createElement("div",{className:a},r.a.createElement("h1",{className:n},"Jake Solomon"),r.a.createElement("h4",{className:s},"Front-End Developer and Analytics Engineer"),e.readMoreButton),r.a.createElement("div",{className:t},r.a.createElement(o.a,{display:"vertical"})))};a("pJf4"),a("XFmL");var i=function(e){var t=Object(n.useState)(""),a=t[0],o=t[1],s="button-text"+a,i="button-border button-border-top"+a,c="button-border button-border-left"+a,l="button-border button-border-bottom"+a,u="button-border button-border-right"+a;return r.a.createElement("div",{className:"button-wrapper",onMouseMove:function(){e.clicked||o("-hover")},onMouseLeave:function(){e.clicked||o("")},onClick:function(){return o("-clicked"),e.onClick&&e.onClick(),void setTimeout((function(){return o("")}),1e3)}},r.a.createElement("button",{className:s},e.text),r.a.createElement("div",{className:i}),r.a.createElement("div",{className:u}),r.a.createElement("div",{className:l}),r.a.createElement("div",{className:c}))};a("IMjo");function c(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var l=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={name:"",email:"",message:"",status:""},a.handleChangeName=a.handleChangeName.bind(c(a)),a.handleChangeEmail=a.handleChangeEmail.bind(c(a)),a.handleChangeMessage=a.handleChangeMessage.bind(c(a)),a.submitForm=a.submitForm.bind(c(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.handleChangeName=function(e){this.setState({name:e.target.value})},o.handleChangeEmail=function(e){this.setState({email:e.target.value})},o.handleChangeMessage=function(e){this.setState({message:e.target.value})},o.submitForm=function(){var e=this;this.setState({status:"PENDING"});var t=document.getElementById("contactForm"),a=new FormData;a.append("name",this.state.name),a.append("email",this.state.email),a.append("message",this.state.message);var n=new XMLHttpRequest;n.open(t.method,t.action),n.setRequestHeader("Accept","application/json"),n.onreadystatechange=function(){n.readyState===XMLHttpRequest.DONE?200===n.status?(e.setState({name:""}),e.setState({email:""}),e.setState({message:""}),e.setState({status:"SUCCESS"})):e.setState({status:"ERROR"}):console.log("xhr.readyState !== XMLHttpRequest.DONE")},n.send(a)},o.render=function(){var e=this,t=this.state.status;return r.a.createElement("form",{id:"contactForm",action:"https://formspree.io/mbjangoe",method:"POST"},r.a.createElement("label",null,"Name:",r.a.createElement("input",{value:this.state.name,onChange:this.handleChangeName})),r.a.createElement("label",null,"E-mail:",r.a.createElement("input",{type:"email",name:"email",value:this.state.email,onChange:this.handleChangeEmail,autocomplete:"off"})),r.a.createElement("label",null,"Message:",r.a.createElement("textarea",{type:"text",name:"message",value:this.state.message,onChange:this.handleChangeMessage,autocomplete:"off"})),"SUCCESS"===t?r.a.createElement("p",null,"Thank you!"):r.a.createElement(i,{clicked:""!=this.state.status,text:"Send",onClick:function(){return e.submitForm()}}),"ERROR"===t&&r.a.createElement("p",null,"Oops! There was an error."))},n}(n.Component);a("aUN1");var u=function(e){var t="read-more-container",a="about-me-content",n="contact-container about-me-dissapear";return e.state.readMore&&(t+=" read-more-container-appear"),"readMore"!=e.state.transition&&(a+=" about-me-dissapear"),e.state.viewContact&&(n="contact-container"),r.a.createElement("div",{className:t},e.closeReadMore,r.a.createElement("div",{className:a},r.a.createElement("h2",null,"About Me"),r.a.createElement("p",null,"I write code because it’s fun. I like making practical things that feel good to use. My background in biology research and degree in math have naturally guided me as a developer to focus on data.",r.a.createElement("br",null),r.a.createElement("br",null),"I spend happy hours mucking around with my projects, and I'm looking for more. Feel free to connect if there's something you'd like to work on together."),e.contactButton),r.a.createElement("div",{className:n},r.a.createElement("h2",null,"Contact"),r.a.createElement(l,null)))};a("DYfs");var m=function(e){var t=Object(n.useState)({x:0,y:0}),a=t[0],o=t[1];Object(n.useEffect)((function(){var e=function(e){return o({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),function(){window.removeEventListener("mousemove",e)}}),[]);var s,i,c,l,u,m,d,h=e.windowWidth;return"hero"==e.state.transition?(s=.05*h,i=.13*h,c=.05*h,l=.13*h,u="25%",m="17%",d=1):"readMore"==e.state.transition?(s=.5*h,i=.33*h,c=.2*-h,l=.08*h,u="60%",m="60%",d=.5):"contact"==e.state.transition&&(s=.45*h,i=.28*h,c=.7*-h,l=.05*h,u="60%",m="60%",d=.5),r.a.createElement("div",{className:"background-container"},r.a.createElement("div",{className:"interactive-background line-top",style:{left:s+a.y/12*d}}),r.a.createElement("div",{className:"interactive-background line-right",style:{right:i+a.x/35*d,height:m}}),r.a.createElement("div",{className:"interactive-background line-bottom",style:{right:c+a.y/12*d}}),r.a.createElement("div",{className:"interactive-background line-left",style:{left:l+a.x/35*d,height:u}}))};a("CWDZ");var d=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={windowWidth:0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.componentDidMount=function(){this.setState({windowWidth:window.innerWidth})},o.render=function(){var e=this,t=r.a.createElement(i,{clicked:!this.props.pageState.hero,text:"Read More",onClick:function(){return e.props.readMore()}}),a=r.a.createElement(i,{clicked:!this.props.pageState.readMore,text:"Contact",onClick:function(){return e.props.viewContact()}}),n=r.a.createElement("div",{className:"close-about-me",onClick:function(){return e.props.readLess()}},r.a.createElement("span",null),r.a.createElement("span",null));return r.a.createElement("div",{className:"landing",id:"landing"},r.a.createElement("div",{className:"hero-container"},r.a.createElement(s,{state:this.props.pageState,readMoreButton:t})),r.a.createElement(u,{state:this.props.pageState,contactButton:a,closeReadMore:n}),r.a.createElement(m,{state:this.props.pageState,windowWidth:this.state.windowWidth}))},n}(n.Component),h=a("Bl7J"),p=(a("5N0+"),a("4kAr")),f=a.n(p),g=a("mwQT"),v=a.n(g),E=a("fVyd"),b=a.n(E),w=a("VU40"),A=a.n(w);var C=function(e){b.a,A.a;var t=r.a.createElement("p",{className:"project-description"},r.a.createElement("b",null,"Tutorstat")," is an internal data analytics app that shows insights about tutor and student performance.",r.a.createElement("br",null),r.a.createElement("br",null),"I'm developing this project to meet the needs of a growing test-prep center to help inform training policy and educate clients about the process.",r.a.createElement("br",null),r.a.createElement("br",null),"I use React for front-end. Data is processed in Ruby before served via Fetch API and displayed using React Vis.",r.a.createElement("br",null),r.a.createElement("br",null),"If you'd like to know more, ",r.a.createElement("a",{href:"#landing",onClick:e.straightToContact},"send me a message"),". I'd love to chat about it."),a=r.a.createElement("p",{className:"project-description"},r.a.createElement("a",{href:"https://fair-weather.netlify.app/",target:"_blank"},r.a.createElement("b",null,"The Good Weather Map"))," is my take on the classic weather app project.",r.a.createElement("br",null),r.a.createElement("br",null),"It searches for states with clear skies and nice temparature, and highlights them on the US map. You can find the code ",r.a.createElement("a",{href:"https://github.com/jakesolomon/fair-weather",target:"_blank"},"on my GitHub"),".");return r.a.createElement("div",null,r.a.createElement("div",{className:"projects-container"},r.a.createElement("h1",null,"What I'm Working on"),r.a.createElement("img",{className:"project-image",src:f.a,alt:"data analytics app"}),r.a.createElement("br",null),t),r.a.createElement("div",{className:"projects-container"},r.a.createElement("img",{className:"project-image",src:v.a,alt:"weather app"}),r.a.createElement("br",null),a))},k=a("vrFN");function S(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var y=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hero:!0,readMore:!1,viewContact:!1,transition:"hero"},a.readMore=a.readMore.bind(S(a)),a.readLess=a.readLess.bind(S(a)),a.viewContact=a.viewContact.bind(S(a)),a.straightToContact=a.straightToContact.bind(S(a)),a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var o=n.prototype;return o.readMore=function(){var e=this;this.setState({hero:!1}),this.setState({transition:"readMore"}),setTimeout((function(){return e.setState({readMore:!0})}),250)},o.readLess=function(){var e=this;this.setState({readMore:!1}),this.setState({viewContact:!1}),setTimeout((function(){return e.setState({hero:!0})}),200),setTimeout((function(){return e.setState({transition:"hero"})}),250)},o.viewContact=function(){var e=this;this.setState({transition:"contact"}),setTimeout((function(){return e.setState({viewContact:!0})}),250)},o.straightToContact=function(){this.setState({transition:"contact"}),this.setState({hero:!1}),this.setState({readMore:!0}),this.setState({viewContact:!0})},o.render=function(){return r.a.createElement("div",null,r.a.createElement(k.a,{title:"Home"}),r.a.createElement(d,{readMore:this.readMore,readLess:this.readLess,viewContact:this.viewContact,pageState:this.state}),r.a.createElement(h.a,null,r.a.createElement(C,{straightToContact:this.straightToContact})))},n}(n.Component);t.default=y},VU40:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAADCklEQVQ4T4WUe0hTURzHv+fcx+a2NnJuM63m0JX0MtLEjJ6QitqDHmQPDJJQiIKo/4Kg/uvxT0ZE+Uf9VUpPqKgsqBQRpSgq6LU2tAm6uaUu3Xa33Rv37qErzPPPPefwvZ/7/f7O7x6CGcaIxWqLikwzCCoA8LKcmk1Qbd0QE73eO5JET+lbWr4lMWQ6ns9sq5BAHiYhf+tUB/ZC8PbBPTAIh6Mfw/6R642jQwf/AUoo5nzmX30A5vzPvPbcGThOnERHJARWkpLSd2nAYeOCXDBR90xloDnZEAc9gCjimRCEXxJBAQWcArry8tSzJmhwJhjJnA1moR3R7t6U9FZ4PDVPAf1Ly36LQx7t/4B8TSXEbTUIHToCdtKL4lB2CkgdCnDscNMF4Xb78elg1JQFVUM9gucv4qsQwodIWImoIQT5DAcrw6E7GoZFZDMVYKCxQWSWlZKJ02cnmRwHfnMVZFjo2g0gUfg3UQHfYxFwU+sFoIRTjxf7+nUk0NSwxOlyf8wvLAA0WhC9HtRoxM9PDmS23v/H9MtICINiTNnnEx8pZHks4VR1xqEfbeRVaXnX5y+O8v11tamXR0YDePTkNXhKsYXXTKkW8FgIYkwSU9pSlldiZ3mcSlpyyWCJ8ZJE9+yuASHxM7rZ+kh5Con1Ok6NHMooe3fDExAQ7zs59k61Tp62Z3mclQrwssEiyf2za0cVOI7F0/ZO+P2jaUB5YaQUFVwG2hItkuy57WodOF4wGtxuvwK8qjf1A2RebfV6jAV+o6PzTSpO0mFyY5ZOg2gwhFg0XsMMQlCt0o5neZyKTQUoAeSa3uxas7rY2tn1Nu0QIoSAYRkssttQtNgOhqEIhcK49+C5opvHsFjJq/eZhpw3U8DkpLmgQMV7x9YSCccAbASgkmu6cIENy4sKQancefHR3fMeLpcbZZwaRb7+tN932ttGdn7FYLExkBohoT4jQ5VdvmoFLGajAr3V9hhVnPrF/OG+TVNjTQtMy55YXDaZdGyYbrHbrUdt1twSrqfXMndgwDdV+wfAeAyaeVM5EgAAAABJRU5ErkJggg=="},XFmL:function(e,t,a){},aUN1:function(e,t,a){},fVyd:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAACiklEQVQ4T63U3YtVZRQG8N86x1ETx5ru+qBwKiEiKvfW6M6KwkC6iDAIGiqwusqYtP8g+qLophKtaOrKiO76oJvJi6hwn4Iiw0okTO8izEF0bM6Kvec0njkzeQh67/a713reZ631PCv8zyeWxavyMi3X+cUXtsfcopgqR4Q7zDlkcxwbzF8K+E3eKT2na4/wIqaU8XSTWOWbuFd4RtqJSWVM94MuBazyV4X1Iro9kCfxONbgBWXsae6nc4VRPyljfBjgjDLWDpR5AmcGk1X5pzLWDQM8pnCViOwx/BAfS6ux0aZ4tLnPbOk4ooz1wwCnMIu7cDnqtpztJa2qoVAzrnt3ThmPLQ/YyYelffhUmnXUduPOKmPFQkJm6JhVWKXTxJ0R7hF2KOKdOm5+KFV+hu/7pnkO+/GWrq5Ww4au27VdpGub8MTCY1W+jBuVcXeYztVGfamMWxaYVPkaHlTGmCrraf+jhlRGqxkG+xYIzJP61im3Ra+5fyjj4j7AWm/3KePSfwGcwRvK2N2Xc1JhbP7lg1n3Yb9wqyJ+VOVfwpSu97Sboj9v4lq2mHOJsBU7lDGik9dLX0sP2BSfnBf2D7nSae8K9+N3YVKqJ77OqWbqjFqJGeEh6VWMSR9YY8IN0cQsdcrBfBuvCFdjG2pZfNcr7SbUTvlI13FtE4qYHKbDEwpX9Am7bkUtkTHhZkVM9An7Z2VcMwzwtDJq354/VR5vxD7gClWeXDTMZUuu8ree9eaXQyd3S4+gXlsvKWJvc/9+to07rIxrL8ywk1ulZ6W9wvO99fVUzwCvN3IKu3TtlHbZHAcuDFj//SqvNGKDIw4sWbD12lpri7ZDNkbt6UVn+Y09GPUfvv8GNufu23YyMdgAAAAASUVORK5CYII="},mwQT:function(e,t,a){e.exports=a.p+"static/goodweather-930ada44638b34769ce4d26557f6f20f.png"}}]);
//# sourceMappingURL=component---src-pages-index-js-3f0d2c26e2e6beb0d382.js.map