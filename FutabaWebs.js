//This is going to contain all the programming logic ofr the slide show buttons on the page

//These are the mian global variables that will be defined as a pointer for the slide show pannel buttons to use to not overlap eachother while swapping the text fields.
var b1 = false; 
var b2 = true;
var b3 = true;


//These are for the main slide show buttons that are on the bottom of the images
function btn1()
{
    document.getElementById('textfield1').hidden = false;
    document.getElementById('textfield2').hidden = true;
    document.getElementById('textfield3').hidden = true;

    b1 = false;
    b2 = true;
    b3 = true;
   
}

function btn2()
{
    document.getElementById('textfield2').hidden = false;
    document.getElementById('textfield1').hidden = true;
    document.getElementById('textfield3').hidden = true;
   
    b1 = true
    b2 = false;
    b3 = true;
}

function btn3()
{
    document.getElementById('textfield3').hidden = false;
    document.getElementById('textfield1').hidden = true;
    document.getElementById('textfield2').hidden = true;
   
    b1 = true;
    b2 = true;
    b3 = false;
}

//These are for the main slide show pannels
function Next_Check() //If the end user hits the next icon
{
    if (b2 == true && b3 == true)
    {
        //Then we are going to toggle text field 2
        document.getElementById('textfield2').hidden = false;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield3').hidden = true;

        b1 = true
        b2 = false;
        b3 = true;

        exit();

    }

    if (b1 == true && b3 == true)
    {
        //Then we are going to toggle text field 3
        document.getElementById('textfield3').hidden = false;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield2').hidden = true;
        
        b1 = true;
        b2 = true;
        b3 = false;

        exit();
        
    }

    if (b1 == true && b2 == true)
    {
        //Then we are going to toggle text field 1
        document.getElementById('textfield1').hidden = false;
        document.getElementById('textfield2').hidden = true;
        document.getElementById('textfield3').hidden = true;

        b1 = false;
        b2 = true;
        b3 = true;

        exit();
        
    }
    

}

function Prev_Check() //If the end user hits the previous icon
{
    if (b2 == true && b3 == true)
    {   //Then we are going to toggle text field 2
        document.getElementById('textfield2').hidden = true;
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield3').hidden = false;

        b1 = true
        b2 = true;
        b3 = false;

        exit();

    }

    if (b1 == true && b3 == true)
    {
        //Then we are going to toggle text field 3
        document.getElementById('textfield3').hidden = true;
        document.getElementById('textfield1').hidden = false;
        document.getElementById('textfield2').hidden = true;
        
        b1 = false;
        b2 = true;
        b3 = true;

        exit();
        
    }

    if (b1 == true && b2 == true)
    {
        //Then we are going to toggle text field 1
        document.getElementById('textfield1').hidden = true;
        document.getElementById('textfield2').hidden = false;
        document.getElementById('textfield3').hidden = true;

        b1 = true;
        b2 = false;
        b3 = true;

        exit();
        
    }
    

}