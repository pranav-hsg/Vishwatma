import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {


  slides = [{
    "redirection": 119,
    "title": "ಸುಗ್ಗನಹಳ್ಳಿ ಷಡಕ್ಷರಿ",
    "img": "profile_pics/1590504835.jpg"
  }, {
    "redirection": 118,
    "title": "ಅರುಣಾ ಬಿ ಎಸ್",
    "img": "profile_pics/1588529634.jpg"
  }, {
    "redirection": 117,
    "title": "ಯಶೋದಾ ಗಣಪತಿ ಭಟ್ಟ",
    "img": "profile_pics/1588396708.jpg"
  }, {
    "redirection": 116,
    "title": "ಜಯಂತ್",
    "img": "profile_pics/1588396518.jpg"
  }, {
    "redirection": 115,
    "title": "ಧಾತ್ರೀ ಶ್ರೀಕಾಂತ್",
    "img": "profile_pics/1588396242.jpg"
  }, {
    "redirection": 114,
    "title": "ಗೀತಾ ಜಿ.ಹೆಗಡೆ",
    "img": "profile_pics/1588396000.jpg"
  }, {
    "redirection": 113,
    "title": "ಸ್ವಾಗತ್",
    "img": "profile_pics/1588395742.jpg"
  }, {
    "redirection": 112,
    "title": "ರವೀಂದ್ರ ಮಾವಖಂಡ",
    "img": "profile_pics/1588395450.jpg"
  }, {
    "redirection": 111,
    "title": "ಸ್ವಾತಿ ಸಿ ಶೇಖರ್",
    "img": "profile_pics/1588395357.jpg"
  }, {
    "redirection": 110,
    "title": "ಮಂಜುನಾಥ ಎಸ್ ಕೆ",
    "img": "profile_pics/1588395224.jpg"
  }, {
    "redirection": 109,
    "title": "ವೆಂಕಟೇಶ್ ಆಶ್ರಿತ್",
    "img": "profile_pics/1588395160.jpg"
  }, {
    "redirection": 108,
    "title": "ರಶ್ಮಿ ಕಶ್ಯಪ್",
    "img": "profile_pics/1588395088.jpg"
  }, {
    "redirection": 107,
    "title": "ಭಾವನಾ ಭಟ್",
    "img": "profile_pics/1588394998.jpeg"
  }, {
    "redirection": 106,
    "title": "ಅನುಷಾ ನಾಗಭೂಷಣ್",
    "img": "profile_pics/1588393249.jpg"
  }, {
    "redirection": 105,
    "title": "ಶಿವಮನ್ಯು ಎಚ್. ಪಾಟೀಲ ( ಎಸ್.ಎಚ್.ಪಾಟೀಲ )",
    "img": "profile_pics/1588392908.jpg"
  }, {
    "redirection": 104,
    "title": "ಮಂಗಳ. ಎಮ್. ನಾಡಿಗ್",
    "img": "profile_pics/1588392773.jpg"
  }, {
    "redirection": 103,
    "title": "ಡಾ||ಅರವಿಂದ",
    "img": "profile_pics/1587971906.jpg"
  }, {
    "redirection": 101,
    "title": "ಅಶ್ವಿನಿ ಕಾಮತ್",
    "img": "profile_pics/1587908169.jpg"
  }, {
    "redirection": 99,
    "title": "ತುಳಸಿ ಭಟ್",
    "img": "profile_pics/1585055991.jpg"
  }, {
    "redirection": 98,
    "title": "ಸಚಿನ್",
    "img": "profile_pics/1582721103.jpg"
  }, {
    "redirection": 86,
    "title": "ವಿನಯ್ ಎಂ. ಎಸ್",
    "img": "img/vinayms.jpg"
  }, {
    "redirection": 85,
    "title": "ಪೂರ್ಣಿಮಾ ಎನ್.ಭಟ್ಟ. ಕಮಲಶಿಲೆ",
    "img": "img/poornima.jpg"
  }, {
    "redirection": 84,
    "title": "ಫಣಿರಾಜ್ ಕಾರಂತ್",
    "img": "img/phaniraj.jpg"
  }, {
    "redirection": 83,
    "title": "ವಿಘ್ನೇಶ್ ಹಂಪಾಪುರ",
    "img": "img/vigneshhampapura.jpg"
  }, {
    "redirection": 82,
    "title": "ವಿಕ್ರಮ್ ಜೋಯ್ಸ್",
    "img": "img/vikram.jpg"
  }, {
    "redirection": 81,
    "title": "ಡಾ. ಅಖಿಲಾ ಹೆಚ್. ಎಸ್.",
    "img": "img/akhila.jpg"
  }, {
    "redirection": 80,
    "title": "ಸದಾಶಿವ್ ಸೊರಟೂರು",
    "img": "img/sadashiv.jpg"
  }, {
    "redirection": 79,
    "title": "ಸುಜಿತ್ ಕಾರ್ಕಳ",
    "img": "img/SujithKarkaLa.jpg"
  }, {
    "redirection": 78,
    "title": "ಶ್ರುತಿ ಬಿ ಆರ್",
    "img": "img/shruthibr.jpg"
  }, {
    "redirection": 77,
    "title": "ರಾಘವೇಂದ್ರ ರಾವ್ .ಕೆ ",
    "img": "img/raghavendra-philips.jpg"
  }, {
    "redirection": 76,
    "title": "ಲಕ್ಷ್ಮೀನರಸಿಂಹ ಪ್ರಸಾದ್",
    "img": "img/Prasad.png"
  }, {
    "redirection": 75,
    "title": "ಪ್ರಿಯಾ ಹೇವಾಲ್",
    "img": "img/Priya.png"
  }, {
    "redirection": 74,
    "title": "ಇನ ಬಾಳಗಂಚಿ",
    "img": "img/ina.jpg"
  }, {
    "redirection": 73,
    "title": "ಪುನೀತ್ ಕಬ್ಬೂರ್",
    "img": "img/puneethkabbur.jpg"
  }, {
    "redirection": 72,
    "title": "ಮನುಶ್ರೀ ಕೆ.ಎಸ್",
    "img": "img/manushree.jpg"
  }, {
    "redirection": 71,
    "title": "ಮಹಿತಾ ಅಡಿಗ ",
    "img": "img/mahita.jpg"
  }, {
    "redirection": 70,
    "title": "ವಿನಾಯಕ ಭಟ್",
    "img": "img/vinayakaBhat.jpeg"
  }, {
    "redirection": 69,
    "title": "ಸಂದೀಪ್ ಈಶಾನ್ಯ",
    "img": "img/eshanya.jpeg"
  }, {
    "redirection": 68,
    "title": "ಧಾತ್ರಿ",
    "img": "img/daatrhri.jpg"
  }, {
    "redirection": 67,
    "title": "ಅರುಣ್ ಕುಮಾರ್",
    "img": "img/arun.jpg"
  }, {
    "redirection": 65,
    "title": "ಟಿ.ವಿ.ಶ್ರೀಮತಿ",
    "img": "img/srimathi.jpg"
  }, {
    "redirection": 64,
    "title": "ದೀಪಾ",
    "img": "img/deepa.jpeg"
  }, {
    "redirection": 63,
    "title": "ಸುಜನಾ ಉಡುಪ",
    "img": "img/sujana.jpeg"
  }, {
    "redirection": 62,
    "title": "ಮೇಘನಾ ಸುಧೀಂದ್ರ",
    "img": "img/Meghana.jpg"
  }, {
    "redirection": 61,
    "title": "ಭರತ್",
    "img": "img/Bharath.jpg"
  }, {
    "redirection": 60,
    "title": "ಪೂರ್ವಿ ಎ. ಜಿ.",
    "img": "img/Poorvi.png"
  }, {
    "redirection": 59,
    "title": "ದಿಲೀಪ್ ರಾವ್",
    "img": "img/DileepRao.jpg"
  }, {
    "redirection": 58,
    "title": "ನವೀನ ಕುಮಾರ ಸುಗಂಧಿ",
    "img": "img/Naveen.jpg"
  }, {
    "redirection": 57,
    "title": "ಪೂರ್ಣಿಮಾ. ಎನ್.ಭಟ್ಟ. ಕಮಲಶಿಲೆ.",
    "img": "img/PoornimaBhat.jpg"
  }, {
    "redirection": 56,
    "title": "ಸಂತೋಷ್ ಗಡದ್",
    "img": "img/Santhosh.jpg"
  }]
  slideConfig = {"slidesToShow": 7, "slidesToScroll": 7, "centerPadding": 40,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]};

  constructor() { }

  ngOnInit(): void {
  }

}
