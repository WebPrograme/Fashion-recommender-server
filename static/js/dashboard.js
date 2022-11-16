(function($) {
  'use strict';
  $.fn.andSelf = function() {
    return this.addBack.apply(this, arguments);
  }
  $(function() {
    if ($("#currentBalanceCircle").length) {
      var bar = new ProgressBar.Circle(currentBalanceCircle, {
        color: '#000',
        // This has to be the same size as the maximum width to
        // prevent clipping
        strokeWidth: 12,
        trailWidth: 12,
        trailColor: '#0d0d0d',
        easing: 'easeInOut',
        duration: 1400,
        text: {
          autoStyleContainer: false
        },
        from: { color: '#d53f3a', width: 12 },
        to: { color: '#d53f3a', width: 12 },
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color);
          circle.path.setAttribute('stroke-width', state.width);
      
          var value = Math.round(circle.value() * 100);
          circle.setText('');
      
        }
      });

      bar.text.style.fontSize = '1.5rem';
      bar.animate(0.4);  // Number from 0.0 to 1.0
    }
    if($('#audience-map').length) {
      $('#audience-map').vectorMap({
        map: 'world_mill_en',
        backgroundColor: 'transparent',
        panOnDrag: true,
        focusOn: {
          x: 0.5,
          y: 0.5,
          scale: 1,
          animate: true
        },
        series: {
          regions: [{
            scale: ['#3d3c3c', '#f2f2f2'],
            normalizeFunction: 'polynomial',
            values: {

              "BZ": 75.00,
              "US": 56.25,
              "AU": 15.45,
              "GB": 25.00,
              "RO": 10.25,
              "GE": 33.25
            }
          }]
        }
      });
    }
    if ($("#transaction-history").length) {
      var areaData = {
        labels: ["Paypal", "Stripe","Cash"],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: [
              "#111111","#00d25b","#ffab00"
            ]
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
          arc: {
              borderWidth: 0
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
      var transactionhistoryChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 1;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = 'left';
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffffff";
      
          var text = "$1200", 
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2.4;
      
          ctx.fillText(text, textX, textY);

          ctx.restore();
          var fontSize = 0.75;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = 'left';
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#6c7293";

          var texts = "Total", 
              textsX = Math.round((width - ctx.measureText(text).width) / 1.93),
              textsY = height / 1.7;
      
          ctx.fillText(texts, textsX, textsY);
          ctx.save();
        }
      }
      var transactionhistoryChartCanvas = $("#transaction-history").get(0).getContext("2d");
      var transactionhistoryChart = new Chart(transactionhistoryChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: transactionhistoryChartPlugins
      });
    }
    if ($("#transaction-history-arabic").length) {
      var areaData = {
        labels: ["Paypal", "Stripe","Cash"],
        datasets: [{
            data: [55, 25, 20],
            backgroundColor: [
              "#111111","#00d25b","#ffab00"
            ]
          }
        ]
      };
      var areaOptions = {
        responsive: true,
        maintainAspectRatio: true,
        segmentShowStroke: false,
        cutoutPercentage: 70,
        elements: {
          arc: {
              borderWidth: 0
          }
        },      
        legend: {
          display: false
        },
        tooltips: {
          enabled: true
        }
      }
      var transactionhistoryChartPlugins = {
        beforeDraw: function(chart) {
          var width = chart.chart.width,
              height = chart.chart.height,
              ctx = chart.chart.ctx;
      
          ctx.restore();
          var fontSize = 1;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = 'left';
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#ffffff";
      
          var text = "$1200", 
              textX = Math.round((width - ctx.measureText(text).width) / 2),
              textY = height / 2.4;
      
          ctx.fillText(text, textX, textY);

          ctx.restore();
          var fontSize = 0.75;
          ctx.font = fontSize + "rem sans-serif";
          ctx.textAlign = 'left';
          ctx.textBaseline = "middle";
          ctx.fillStyle = "#6c7293";

          var texts = "مجموع", 
              textsX = Math.round((width - ctx.measureText(text).width) / 1.93),
              textsY = height / 1.7;
      
          ctx.fillText(texts, textsX, textsY);
          ctx.save();
        }
      }
      var transactionhistoryChartCanvas = $("#transaction-history-arabic").get(0).getContext("2d");
      var transactionhistoryChart = new Chart(transactionhistoryChartCanvas, {
        type: 'doughnut',
        data: areaData,
        options: areaOptions,
        plugins: transactionhistoryChartPlugins
      });
    }
    if ($('#owl-carousel-basic').length) {
      $('#owl-carousel-basic').owlCarousel({
        loop: true,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        smartSpeed:0,
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-2').length) {
      $('#owl-carousel-basic-2').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-3').length) {
      $('#owl-carousel-basic-3').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-4').length) {
      $('#owl-carousel-basic-4').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-5').length) {
      $('#owl-carousel-basic-5').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-6').length) {
      $('#owl-carousel-basic-6').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-7').length) {
      $('#owl-carousel-basic-7').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-8').length) {
      $('#owl-carousel-basic-8').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-9').length) {
      $('#owl-carousel-basic-9').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-basic-10').length) {
      $('#owl-carousel-basic-10').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-small').length) {
      $('#owl-carousel-small').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false,
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-2').length) {
      $('#owl-carousel-small-2').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-3').length) {
      $('#owl-carousel-small-3').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-4').length) {
      $('#owl-carousel-small-4').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-5').length) {
      $('#owl-carousel-small-5').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-6').length) {
      $('#owl-carousel-small-6').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-7').length) {
      $('#owl-carousel-small-7').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-8').length) {
      $('#owl-carousel-small-8').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-9').length) {
      $('#owl-carousel-small-9').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-small-10').length) {
      $('#owl-carousel-small-10').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1,
            touchDrag: true
          },
          380: {
            items: 2,
            touchDrag: false
          },
          550: {
            items: 2,
            touchDrag: false
          },
          768: {
            items: 1,
            touchDrag: true
          },
          1000: {
            items: 1,
            touchDrag: true
          }
        }
      });
    }
    if ($('#owl-carousel-forselected').length) {
      $('#owl-carousel-forselected').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-2').length) {
      $('#owl-carousel-forselected-2').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-3').length) {
      $('#owl-carousel-forselected-3').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-4').length) {
      $('#owl-carousel-forselected-4').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-5').length) {
      $('#owl-carousel-forselected-5').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-6').length) {
      $('#owl-carousel-forselected-6').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-7').length) {
      $('#owl-carousel-forselected-7').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-9').length) {
      $('#owl-carousel-forselected-9').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    if ($('#owl-carousel-forselected-10').length) {
      $('#owl-carousel-forselected-10').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-left'></i>", "<i class='mdi mdi-chevron-right'></i>"],
        responsive: {
          0: {
            items: 1
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    var isrtl = $("body").hasClass("rtl");
    if ($('#owl-carousel-rtl').length) {
      $('#owl-carousel-rtl').owlCarousel({
        loop: true,
        smartSpeed:0,
        nav: false,
        rtl: isrtl,
        autoplay: false,
        autoplayTimeout: 4500,
        navText: ["<i class='mdi mdi-chevron-right'></i>", "<i class='mdi mdi-chevron-left'></i>"],
        responsive: {
          0: {
            items: 1
          },
          380: {
            items: 2
          },
          550: {
            items: 2
          },
          768: {
            items: 1
          },
          1000: {
            items: 1
          }
        }
      });
    }
    });
})(jQuery);