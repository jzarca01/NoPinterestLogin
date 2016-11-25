function getElementByAttribute(attr, value, root) {
    root = root || document.body;
    if(root.hasAttribute(attr) && root.getAttribute(attr) == value) {
        return root;
    }
    var children = root.children, 
        element;
    for(var i = children.length; i--; ) {
        element = getElementByAttribute(attr, value, children[i]);
        if(element) {
            return element;
        }
    }
    return null;
}

function getElementByStyle(styleProp, styleValue, elSearchChildren){
	var r=[], b=document.body;
    var a=b.querySelectorAll('*');
    for(var i=0;i<a.length;i++){
    	if(getStyle(a[i],styleProp)==styleValue){r.push(a[i]);}
    }
    return r;
}
function getStyle(el,styleProp)
{
	var y='';
	if(el.currentStyle){y=el.currentStyle[styleProp];}
	else if(window.getComputedStyle){y=document.defaultView.getComputedStyle(el,null).getPropertyValue(styleProp);}
	return y;
}


var FullPageModal__scroller= document.getElementsByClassName("FullPageModal__scroller");

if(FullPageModal__scroller.length > 0)
{	
	var login_popin = FullPageModal__scroller[0];
	var parent_login = getElementByStyle("background-color", "rgba(0, 0, 0, 0.6)", "div");
}

else if(getElementByAttribute("data-test-giftwrap", "true"))
{
	var login_popin = getElementByAttribute("data-test-giftwrap", "true");
	var parent_login = getElementByStyle("background-color", "rgba(0, 0, 0, 0.6)", "div");
}

else if(getElementByAttribute("data-test-signup", "true"))
{
	var login_popin = getElementByAttribute("data-test-signup", "true");
	var parent_login = getElementByStyle("background-color", "rgba(0, 0, 0, 0.6)", "div");
}

setTimeout(function() {
    login_popin.remove();
    parent_login_popin.remove();
}, 2000);
