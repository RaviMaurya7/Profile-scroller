const data=[
        {
            name: 'Ravi Maurya',
            age: 20,
            gender: 'Male',
            location: 'Varanasi',
            image: 'img/ravi1.JPG'
          },
          {
            name: 'Aditya Wankhede',
            age: 21,
            gender: 'Male',
            location: 'Maharastra',
            image: 'img/wankhede.JPG'
            },
            {
              name: 'Raghav Binani',
              age: 20,
              gender: 'Male',
              location: 'Bikanear',
              image: 'img/binani.JPG'
            },
            {
              name: 'Sarfaraj(Coder) Alam',
              age: 21,
              gender: 'Male',
              location: 'Bihar',
              image: 'img/sarfaraj.JPG'
              },
              {
                name: 'Chetan Bhalotia',
                age: 20,
                gender: 'Male',
                location: 'Bihar',
                image: 'img/chetan.JPG'
              },
              {
                name: 'Vikash Saini',
                age: 20,
                gender: 'Male',
                location: 'Rajasthan',
                image: 'img/saini.JPG'
              },
              {
                name: 'Arshdeep Kumar',
                age: 20,
                gender: 'Male',
                location: 'Punjab',
                image: 'img/arshdeep.JPG'
              },
              {
                name: 'Gaurav Sachdeva',
                age: 20,
                gender: 'Male',
                location: 'USA',
                image: 'img/gaurav.JPG'
                },
                {
                  name: 'Jatin Bansal',
                  age: 20,
                  gender: 'Male',
                  location: 'Rajasthan',
                  image: 'img/jatin.JPG'
                  },
          {
            name: 'Rakesh Pandey',
            age: 21,
            gender: 'Male',
            location: 'Maharastra',
            image: 'img/pandey.JPG'
          },
          {
          name: 'Prabhat Sharma',
          age: 20,
          gender: 'Male',
          location: 'Himanchal Pradesh',
          image: 'img/prabhat.JPG'
          },
            {
              name: 'Sankalp Arora',
              age: 20,
              gender: 'Male',
              location: 'jalandhar',
              image: 'img/sankalp.JPG'
              }
];
const current=profileIterator(data);
document.getElementById('button1').addEventListener('click' , nextprofile);
function nextprofile()
{
    const currentProfile=current.next().value;
    if(currentProfile!==undefined){
    document.getElementById('image').innerHTML=`
    <img class=" col-md-6 img-responsive img-circle" src="${currentProfile.image}">
    `;
    document.getElementById('profile').innerHTML=`
    <ul class="list-group">
    <li class="list-group-item">Name: ${currentProfile.name}</li>
    <li class="list-group-item">Age: ${currentProfile.age}</li>
    <li class="list-group-item">Gender: ${currentProfile.gender}</li>
    <li class="list-group-item">Homecity: ${currentProfile.location}</li>
    </ul>
    `;
    document.querySelector('li:nth-child(1)').style.backgroundColor='orange';
    document.querySelector('li:nth-child(1)').style.color='red';
    document.querySelector('li:nth-child(2)').style.backgroundColor='gray';
    document.querySelector('li:nth-child(3)').style.backgroundColor='orange';
    document.querySelector('li:nth-child(4)').style.backgroundColor='gray';
    
  }
    else{
        window.location.reload();
    }
}
nextprofile();
document.getElementById('coloring').addEventListener('mousemove', function (e){
  document.body.style.backgroundColor=`rgb(${e.clientX % 256}, ${e.clientY % 256}, ${(e.clientX + e.clientY)%256})`;
});
function profileIterator(names)
{
    let size=0;
    return{
        next:
        function(){
            return names.length>size?
            {value:names[size++], done:false}:
            {done:true};
        }
    }
}
