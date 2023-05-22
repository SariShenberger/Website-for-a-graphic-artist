using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace APIServer.Models
{
  public class DB
  {
    public static List<Service> myServices { get; set; } = new List<Service>{

    new Service() {title="מיתוג", image="../../../assets/מיתוג.png", description="תיאור מיתוג",price=100, priceFor="שעה",showDetails=false},
    new Service(){title="עיצוב מוצר", image="../../../assets/עיצוב מוצר.jpg", description="תיאור עיצוב מוצר",price=100, priceFor="שעה",showDetails=false},
    new Service(){ title= "עימוד", image= "../../../assets/עימוד.jpg", description= "תיאור עימוד",price= 50, priceFor="שעה", showDetails = false},
    new Service() { title= "כרזות ומודעות", image= "../../../assets/מודעה.png", description= "תיאור כרזות ומודעות",price= 50, priceFor= "שעה", showDetails = false},
    new Service(){ title= "קמפיינים", image= "../../../assets/קמפיין.jpg", description= "תיאור קמפיינים",price= 200, priceFor= "שעה", showDetails = false},
    new Service(){ title= "עיצוב כללי", image= "../../../assets/עיצוב כללי.jpg", description= "תיאור מיתוג",price= 75, priceFor= "שעה", showDetails = false}
    };
    public static List<Response> Responses { get; set; } = new List<Response>
    {
      new Response(){firstName="שרי",description="תודה!!!!!!!!!", lastName="שנברגר", Email="Sari@gmail.com", phonNumber="111111", likes=0},
      new Response(){firstName="בילי",description="מושלם!!!!", lastName="קלרמן", Email="Beily@gmail.com", phonNumber="222222", likes=0},
      new Response(){firstName="נחמי",description="אין עליכם, פשוט אליפות!!!!!", lastName="מוזס", Email="Nechami@gmail.com", phonNumber="3333333", likes = 0},

    };

  }
}

