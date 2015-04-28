var triangle = {
    isEquilateral : function(a,b,c) {
    	    if(a!=b) return false ;
    	    if(b!=c) return false ;
    		return true ;
    },
     isIsosceles : function(a,b,c) {
    	if(a==b||a==c||b==c) return true;
    	    return false ;
    },
    isScalene : function(a,b,c) {
    	if(a==b&&a==c) return true;
	    return false ;
}
};
