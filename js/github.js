$(document).ready(function () {
  var url = $('table').first().data('url');

  // GitHub allows only 60 API calls per hour from the same IP address,
  // therefore we check first if we have API calls left.
  // If not we display a proper error message!
  var remaining;
  $.getJSON('https://api.github.com/rate_limit', function (data) {
    remaining = data.rate.remaining;
    console.log(remaining)
    if(remaining > 0) {
      console.log(url)
      $.getJSON(url, function (data) {
        $.each(data, function (index) {

          // Assignee can be nil
          var mentor = this.assignee ? this.assignee.login : this.user.login;
          var mentor_url = this.assignee ? this.assignee.html_url : this.user.html_url;

          // Add the rows to the tables
          var row = "<tr><td><a href='#eventModal" + index + "' data-toggle='modal'>" + this.title + "</a>" +
              " together with <a href='" + mentor_url + "'><i class='fa fa-fw fa-github'></i>" + mentor + "</a></td>" +
              "<td><a href='" + this.html_url + "' type='button' class='btn btn-success btn-xs'>Yes, let's do it</a></td></tr>";
          
          var title = this.title;
          console.log("TITLE IS", title);
          console.log("Assingme: " + this.mentor);
          console.log(row)

          $.each(this.labels, function () {
                var name = this.name.split(' ');
                name = name[name.length -1];
                $('.' + name + '-table tbody').append(row);
                $('.' + name + '-table').show();
                $('.' + name + '-placeholder').remove();
          });

          gsoc_hint = get_gsoc_hint(this.labels);
          console.log(gsoc_hint);

          // Add the modal for the project
          var modal = "<div class='portfolio-modal modal fade' id='eventModal" + index + "' tabindex='-1' role='dialog' aria-hidden='true'> <div class='modal-content'>" +
              "<div class='close-modal' data-dismiss='modal'>" +
              "<div class='lr'>" +
              "<div class='rl'>" +
              "</div></div></div>" +
              "<div class='container'>" +
              "<div class='row'>" +
              "<div class='col-lg-8 col-lg-offset-2'>" +
              "<div class='modal-body'>" +
              "<h2 class='text-center'>" + this.title + "</h2>" +
              "<hr class='star-primary'>" +
              "<h3>" + this.title + "</h3>" +
              "<p>" + markdown.toHTML(this.body) + "</p>" +
              gsoc_hint +
              "<div class='text-center btn-toolbar'>" +
              "<a href='" +
              this.html_url +
              "' type='button' class='btn btn-success btn-lg'><i class='fa fa-check fa-fw'></i>Yes, let's do it</a>" +
              "</div></div></div></div></div></div></div>";
          $('footer').after(modal);
          $('.project-placeholder').html("Sorry but currently we don't have any mentoring project ...")
        });
      });
    }
    else{
      $('.project-placeholder').html("Sorry but it seems like you exceeded the allowed number of requests. Please have a look at <a href='https://github.com/Cloud-CV/GSoC-Ideas'>our issues</a>!")
    }
  });
});

function get_gsoc_hint(labels){
  result = "";
  current_url = window.location.href;
  for(var i = 0; i < labels.length; i++) {
    if (labels[i].name == 'GSoC-2022') {
      if(current_url.indexOf('gsoc') > -1) {
        url = current_url;
      }
      else{
        url = current_url + "/gsoc";
      }
      result = "<p>You can do this project as part of the Google Summer of Code program.</p>"
      break;
    }
  }
  return result;
}
