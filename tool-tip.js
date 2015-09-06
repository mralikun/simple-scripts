var ToolTip = {
	
	title: "" ,
	description: "" ,
	
	reset: function (__event) {
		
		ToolTip.element.style.display = "none";
		
	},
		
	// setTitle: function ( __title ){ this.title = __title; },
	// setDescription: function ( __description ) { this.description = __description },
	
	init: function ( __target , __options ) {
			
			// setting options
			
		this.title = __options.title  ;
		this.description = __options.description  ;
		
			//	creating the floating element
			
		this.element = document.createElement("div");
		
		var __title = document.createElement("div");
		
		__title.textContent = this.title;
		__title.classList.add("tt-title");
		
		var __description = document.createElement("div");
		
		__description.textContent = this.description;
		__description.classList.add("tt-desc");
		
		this.element.appendChild(__title);
		this.element.appendChild(__description);
		this.element.style.position = "absolute";
		this.element.style.display = "none";
		this.element.classList.add("tt");
		document.body.appendChild(this.element);
		__target.addEventListener( "mousemove" , this.showTip ) ;
		__target.addEventListener( "mouseout" , this.reset );
		
	} ,
	

	
	repose: function ( event ) {
		
		this.element.style.top = (event.clientY + 10) + "px";
		this.element.style.left = (event.clientX + 10) + "px";
		
	},
	
	showTip: function ( ev ) {
		
		ToolTip.repose( ev );
		ToolTip.element.style.display = "block";
		
	},
	
}