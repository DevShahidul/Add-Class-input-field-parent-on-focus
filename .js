	// Begin input common focus and blur for value.
		$('input:text,input:password,textarea').focus(function(){
            if(this.value==this.defaultValue){
                this.value='';
                
            }
        })
		$('input:text,input:password,textarea').blur(function(){
            if(!this.value){this.value=this.defaultValue;}
            if(this.value==this.defaultValue){
                $(this).removeClass('value-added')
            }
            else{
                $(this).addClass('value-added')
            }

        })
		// Ends input common focus and blur for value.
