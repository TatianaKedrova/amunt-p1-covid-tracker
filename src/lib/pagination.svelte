<div class="pagination">
    <a href="#" class="text">Previous</a>
    <a href="#">1</a>
    <a href="#" class="active">2</a>
    <a href="#">3</a>
    <a href="#">4</a>
    <a href="#">5</a>
    <a href="#">6</a>
    <a href="#"class="text">Next</a>
  </div>

  <style>
    .pagination {
      display: inline-block;
    }
    
    .pagination a {
      color: black;
      float: left;
      padding: 8px 16px;
      text-decoration: none;
      transition: background-color .3s;
    }
    
    .pagination a.active {
      background-color: #3639ae;
      color: white;
    }
    
    .pagination a:hover:not(.active) {background-color: #ddd;}

    .text{
      font-size: 16px;
    }
    
    </style>


