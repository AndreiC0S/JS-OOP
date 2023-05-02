$("#adauga").on("click", function( event ) {
    
    $("#styleadd").toggleClass("d-none");
    $("#styleadd").toggleClass("d-flex");
  });
  

function RequestJSON() {
  let a = $.ajax({
          type: 'GET',
          url: 'http://localhost:3001/users',
          headers: { "Access-Control-Allow-Origin": "*" },
          dataType: 'json',
          contentType: 'application/json',
          
      })
  return a
}
function getJS(){
  let jsfile = $.ajax({
    type: 'GET',
    url: 'http://localhost:3001/users',
    headers: { "Access-Control-Allow-Origin": "*" },
    dataType: 'json',
    contentType: 'application/json',
    
  })
  console.log('jsin',jsfile)
  return jsfile
}



const arrcobai = []

function manipulateData(posts) {
  Object.keys(posts).forEach(item => {
    arrcobai.push(posts[item].id)
    
      
  })
};


RequestJSON().then((myposts) => {
  manipulateData(myposts);
  console.log( 'arr cobai:', arrcobai[arrcobai.length - 1])
  console.log('succes promisiunea 1', Object.keys(myposts));
  
}).catch((err) => {
  console.log('O promisiune nu s-a realizat', err);
})



       

