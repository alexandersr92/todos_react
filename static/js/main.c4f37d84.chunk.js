(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{13:function(e,t,o){},14:function(e,t,o){"use strict";o.r(t);var n=o(1),c=o.n(n),a=o(4),r=o.n(a),s=o(6),l=o(2);var u=o(0),d=c.a.createContext();function i(e){var t=function(e,t){var o=c.a.useState(!1),n=Object(l.a)(o,2),a=n[0],r=n[1],s=c.a.useState(!0),u=Object(l.a)(s,2),d=u[0],i=u[1],j=c.a.useState(t),b=Object(l.a)(j,2),h=b[0],x=b[1];return c.a.useEffect((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),x(o),i(!1)}catch(c){r(c)}}),1e3)})),{item:h,saveItem:function(t){try{var o=JSON.stringify(t);localStorage.setItem(e,o),x(t)}catch(n){r(n)}},loading:d,error:a}}("TODOS_V1",[]),o=t.item,n=t.saveItem,a=t.error,r=t.loading,i=c.a.useState(""),j=Object(l.a)(i,2),b=j[0],h=j[1],x=c.a.useState(!1),O=Object(l.a)(x,2),m=O[0],p=O[1],f=o.filter((function(e){return!!e.complete})).length,v=o.length,g=[];g=!b.length>=1?o:o.filter((function(e){var t=e.text.toLowerCase(),o=b.toLowerCase();return t.includes(o)}));return Object(u.jsx)(d.Provider,{value:{loading:r,error:a,totalTodos:v,completedTodos:f,searchValue:b,setSearchValue:h,searchedTodos:g,completeTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(s.a)(o);c[t].complete=!c[t].complete,n(c)},deleteTodo:function(e){var t=o.findIndex((function(t){return t.text===e})),c=Object(s.a)(o);c.splice(t,1),n(c)},openModal:m,setOpenModal:p,addTodo:function(e){var t=Object(s.a)(o);t.push({text:e,complete:!1}),n(t)}},children:e.children})}function j(){var e=c.a.useContext(d),t=e.totalTodos,o=e.completedTodos;return Object(u.jsxs)("h1",{children:["Has completado ",o," de ",t," todo"]})}function b(){var e=c.a.useContext(d),t=e.searchValue,o=e.setSearchValue;return Object(u.jsx)("input",{onChange:function(e){o(e.target.value)},className:"search",type:"text",value:t,placeholder:"Busca lo que quieras \ud83d\udd0d"})}function h(e){return Object(u.jsx)("section",{className:"todoList",children:Object(u.jsx)("ul",{children:e.children})})}function x(e){var t=e.complete?"completed":"",o=e.complete?'checked="checked"':"";return Object(u.jsxs)("li",{className:t,children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{type:"checkbox",onChange:e.onComplete,checked:o}),Object(u.jsx)("p",{children:e.text})]}),Object(u.jsx)("button",{onClick:e.onDelete,children:"X"})]})}function O(e){var t=e.openModal?"createTodo clouse":"createTodo";return Object(u.jsx)("button",{className:t,type:"button",onClick:function(){e.setOpenModal((function(e){return!e}))},children:"+"})}function m(){var e=c.a.useState(""),t=Object(l.a)(e,2),o=t[0],n=t[1],a=c.a.useContext(d),r=a.addTodo,s=a.setOpenModal;return Object(u.jsxs)("form",{onSubmit:function(e){e.preventDefault(),r(o),s(!1)},children:[Object(u.jsx)("label",{children:"Escribe tu nuevo To Do"}),Object(u.jsx)("textarea",{value:o,onChange:function(e){n(e.target.value)},placeholder:"Escribe una nueva tarea"}),Object(u.jsxs)("div",{className:"TodoForm-buttonContainer",children:[Object(u.jsx)("button",{type:"button",className:"TodoForm-button TodoForm-button-cancel",onClick:function(){s(!1)},children:"Cancelar"}),Object(u.jsx)("button",{className:"TodoForm-button TodoForm-button-add",type:"submit",children:"A\xf1adir"})]})]})}function p(e){var t=e.children;return r.a.createPortal(Object(u.jsx)("div",{className:"modal",children:t}),document.getElementById("modal"))}o(13);function f(){var e=c.a.useContext(d),t=e.error,o=e.loading,n=e.searchedTodos,a=e.completeTodo,r=e.deleteTodo,s=e.openModal,l=e.setOpenModal;return Object(u.jsxs)(c.a.Fragment,{children:[Object(u.jsx)(j,{}),Object(u.jsx)(b,{}),Object(u.jsxs)(h,{children:[t&&Object(u.jsx)("p",{children:"Error en la carga"}),o&&Object(u.jsx)("p",{children:"Cargando ...."}),!o&&!n.length&&Object(u.jsx)("p",{children:"Crea nuevos todos"}),n.map((function(e){return Object(u.jsx)(x,{text:e.text,complete:e.complete,onComplete:function(){return a(e.text)},onDelete:function(){return r(e.text)}},e.text)}))]}),!!s&&Object(u.jsx)(p,{children:Object(u.jsx)(m,{})}),Object(u.jsx)(O,{setOpenModal:l,openModal:s})]})}var v=function(){return Object(u.jsx)(i,{children:Object(u.jsx)(f,{})})};r.a.render(Object(u.jsx)(v,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.c4f37d84.chunk.js.map