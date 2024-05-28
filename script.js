     function SetBackground() {
      let today = new Date(); 
      console.log(Date.now()); 
      let hour = today.getHours();
      console.log(hour);
      let greeting; 
      if (hour >= 18) {
      greeting = "url('night.jpg')";
      } else if (hour >= 12) {
      greeting = "url('afternoon.jpg')";
      } else if (hour >= 0) {
      greeting = "url('cover.jpg')";
      } else {
       greeting = "url('cover.jpg')";
      }
      document.documentElement.style.backgroundImage = greeting;
   }
   SetBackground ();
