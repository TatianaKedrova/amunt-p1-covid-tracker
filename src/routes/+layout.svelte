<header class="layout-header">
<ul>
    <li><img src="/logo.png" class="logo" alt="Logo"></li>
    <li><a href="#home">Home</a></li>
    <li><a href="#prevention">Prevention</a></li>
    <li><a href="#qurantine">Qurantine</a></li>
    <li><a href="#pages">Pages</a></li>
    <li><a href="#about">About</a></li>
    <li><a href="#help">Help</a></li>
    <li id="tracker"><a href="#tracker">Tracker</a></li>
</ul>
</header>
<slot />
<footer class="layout-footer">Footer</footer>




<style>

.layout-header{
    background-color: pink;
    text-align: right;
    padding: 20px 10px;
    overflow: hidden;
}

.layout-header li{
    display: inline;
    padding-left: 60px;
}

.layout-header li a{
    text-decoration: none;
    font-size: 16px; 
    color: #8d8daf;
    padding: 12px;
    transition: .3s ease;
}

.layout-header li a:hover{
    color: royalblue;
}

.layout-header ul #tracker a{
color: white;
background-color: #3639ae;
border-radius: 30px;
float: right;
position: relative;
top: -10px;
left: -45px;

padding-left: 30px;
padding-right: 30px;

transition: .3s ease;
}

.layout-header ul #tracker a:hover{
background-color: #293090;
}

.layout-header li img {
    width: 180px;
    float: left;
    margin-top: -5px;
}


.layout-footer{
    background-color: #1b2a4e;
    color: #8d8daf;
    font-size: 30px;
    text-align: center;
    padding: 10px;
}


</style>