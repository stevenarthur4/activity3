$(document).ready(function(){
   console.log("Hello World!");
   
   
    /* Id selector example */
    $("#idselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Id selectors rely on the '#' sign to indicate an id attribute */
        $("#Child1").toggleClass("borderstyle");
    });
    
    /* Class selector example */
    $(".classselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Class selectors rely on the '.' sign to indicate a class attribute */
        $(".Child2").toggleClass("borderstyle");
    });
    
    /* Attribute selector example */
    $("[prop='attributeselectorlink'").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Prop selectors rely on the following notation: [name='value'] */
        $("[prop='Child3'").toggleClass("borderstyle");
    });
    
    /* Multi selector example */
    $(".multiselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Multi selectors rely on separating statements using ',' to select multiple elements. You can also chain selectors, such as 'element.class' */
        $("div#Child1, div.Child2").toggleClass("borderstyle");
    });

    /* Child selector example */
    $(".childselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Child selectors rely on '>' sign to select all direct child elements of the given parent */
        $("#Parent1 > #Child1").toggleClass("borderstyle");
    });
    
     /* Descendant selector example */
    $(".descendantselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Child selectors rely on ' ' to select all elements that are descendants of the given ancestor */
        $("#Parent1 div").toggleClass("borderstyle");
    });
    
    /* Next adjacent selector example */
    $(".nextadjacentselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Next adjacent selectors rely on '+' to select all next elements immediately preceded by the given prev  sibling, as in 'prev + next'. The '*' sign is used to select any and all elements. */
        $("#Child1 + *").toggleClass("borderstyle");
    });
    
    /* Next sibling selector example */
    $(".nextsiblingselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Next sibling selectors rely on '~' to select all sibling elements following the given prev element that have the same parent, as in 'prev ~ sibs'. The * sign is used to select any and all elements. */
        $("#Child1 ~ *").toggleClass("borderstyle");
    });

     /* Filter selector example */
    $(".filterselectorlink").click(function(){
        /* This is a selector that targets the element affected by the click event */
        $(this).toggleClass("linkstyle");
        /* Filter selectors selects all elements that are the nth child of their parent */
        $("div:nth-child(1)").toggleClass("borderstyle");
    });
    
});
