

new Glider(document.querySelector('.glider'), {
   
    rewind:true,
    draggable: true,
    arrows: {
      prev: '.glider-prev',
      next: '.glider-next'
    },
    responsive: [
      {
       
        breakpoint: 0,
        settings: {
          slidesToShow: '2,2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 576,
        settings: {
          slidesToShow: '3.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 768,
        settings: {
          slidesToShow: '4.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 992,
        settings: {
          slidesToShow: '5.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
    
  });

  new Glider(document.querySelector('.glider2'), {
    // slidesToShow: 4.3,
    // slidesToScroll: 1,
    rewind:true,
    draggable: true,
    arrows: {
      prev: '.gliderprev1',
      next: '.glidernext1'
    },
    responsive: [
      {
       
        breakpoint: 0,
        settings: {
          slidesToShow: '2,2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 576,
        settings: {
          slidesToShow: '3.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 768,
        settings: {
          slidesToShow: '4.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      },{
        
        breakpoint: 992,
        settings: {
          slidesToShow: '5.2',
          slidesToScroll: '1',
          itemWidth: 150,
          duration: 0.25
        }
      }
    ]
    
  });