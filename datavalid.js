// JavaScript Document
function nonblank(data1)
{
	if(data1.value=="")
	{
		alert("Blank not allowed...");
		//data1.focus();
	}
	
	//if(isNaN(data1.value)==false)
	//alert("Numbers are not allowed...");
}
function numcheck(c)
{
	if(isNaN(c.value)==true)
	{
		alert("Only numbers are allowed...");
		c.value="";
		//c.focus();
	}
	if(c.value=="")
	{
		alert("Blank not allowed...");
		//c.focus();
	}
}

function charcheck(c)
{
	if(c.value=="")
	{
		alert("Blank not allowed...");
	}
	else 
	if(isNaN(c.value)==false)
	{
		alert("Only alphabets are allowed...");
	}
	
}

function notequal(p,u)
{
	if(p.value==u.value)
	{
		alert("Username and password should not be equal...");
		p.value="";
		u.vlaue="";
		u.focus();
	}
}
function checkphone(num)
{
	var len;
	len=num.value.length;
	
	if(len<10 || isNaN(len)===true)
		{alert("Wrong Phone/Mobile number...");}
	
}
function passcheck(p)
{
if(p.value.length<8||p.value.length>15 || p.value.length==0 || p.value=="")
	{
		alert("Password should be 8 to 15 characters long.");
		//p.focus();
	}
}

function comparepass(p1,p2)
{
		if(p1.value!=p2.value)
		{
			alert("Both password must be equal...");
			p1.value="";
			p2.value="";
		}
}
