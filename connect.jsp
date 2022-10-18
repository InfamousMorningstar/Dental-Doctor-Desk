<%@ page import= "java.sql.*"%>

<% 
String firstname = request.getParameter("fname");
String lastname = request.getParameter("lname");
String email = request.getParameter("email");
String mobile = request.getParameter("mobile");
String date = request.getParameter("date");
String time = request.getParameter("time");

try {

Class.forName("com.mysql.jdbc.Driver");
Connection conn = DriverManager.getConnection("jdbc:mysql://localhost:3306/test","root","mysql")
PreparedStatement ps = conn.prepareStatement("insert into patient(firstname, lastname, email, mobile, date, time") values("?,?,?,?,?,?"));
ps.setString(1,firstname);
ps.setString(2,lastname);
ps.setString(3,email);
ps.setString(4,mobile);
ps.setString(5,date);
ps.setString(6,time);
int x = ps.executeUpdate();
if(x > 0) {
    out.printlin("good");
}else{
    out.println("no good")
}

}catch(Exception e){
    out.println(e);
}
%>