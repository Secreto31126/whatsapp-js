class ClientMessage{_build(){return JSON.stringify(this)}}class ClientLimitedMessageComponent{constructor(p,c,a,n){if(a.length>n)throw new Error(`${p} can't have more than ${n} ${c}`)}}class Section extends ClientLimitedMessageComponent{title;constructor(name,keys_name,elements,max,title,title_length=24){if(super(name,keys_name,elements,max),title){if(title.length>title_length)throw new Error(`${name} title must be ${title_length} characters or less`);this.title=title}}}class ContactComponent{_build(){return this}}class ContactMultipleComponent extends ContactComponent{get _many(){return!0}}class ContactUniqueComponent extends ContactComponent{get _many(){return!1}}export{ClientLimitedMessageComponent,ClientMessage,ContactComponent,ContactMultipleComponent,ContactUniqueComponent,Section};
//# sourceMappingURL=types.js.map