ROUTE = {
  NONE: -1,
  EAST: 0,
  SOUTH: 1,
  WEST: 2,
  NORTH: 3
}

function main() {
  let cells = 5; //5x5
  let width = 60;
  let height = 60;
  let direction = -1
  let MyGrid = new grid('.grid', cells, cells, width, height);
  let MyBus = new bus(1, 4, cells, width, height, direction); //direction noth=3

  // Draw Grid
  MyGrid.init();
  Focus();

  this.readKey = function () {
    let key = $("#txtCommand").val();
    //myCommand.setCommand(strCommand);
    //string = key;
    var commandCheck = MyBus.validateKey(key);
    if (commandCheck != "") {
      $("#status").html(commandCheck);
      return;
    } else {
      $("#status").html("");
      this.executeKey(key);
    }
    cleanCarPark();

  }

  this.exampleBus = function () {
    //let commandKeys = $('#exampleBus').val();
    var lines = $('#txtBus').val().split(";");
    var l = lines.length;;
    //console.log(l);
    for (var i = 0; i < l; i++) {
      //code here using lines[i] which will give you each line
      //console.log(lines[i]);
      let key = lines[i];
      this.executeKey(key);
    }

    disable();
    Focus();
    alert("You can move with the keyboard!")
  }

  this.keyboard = function (key) {
    console.log(key);
    this.executeKey(key);
  }
  /*
    $("#txtCommand").keydown(function (e) {
      if (e.keyCode == 13) {
        e.preventDefault();
        $('#btnCommand').click();
      }
    });*/


  $("#txtCommand").keydown(function (e) {
    var x = e.which;
    switch (e.which) {
      case 37: // left:0
        keyboard("LEFT");
        break;

      case 38: // up:1:move
        keyboard("MOVE");
        break;

      case 39: // right:2
        keyboard("RIGHT");
        break;

      case 13: // enter
        readKey();
        break;

      default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
  });




  this.executeKey = function (key) {
    d3.select('.grid').selectAll("path").remove();
    //myBus.isInitialized = true; //comentar luego
    var cmd = this.splitKey(key);
    //console.log(cmd);
    //console.log(cmd);
    switch (cmd.command.toUpperCase()) {
      case "PLACE":
        MyBus.setvalues(parseInt(cmd.params[0]), parseInt(cmd.params[1]), parseInt(ROUTE[cmd.params[2].toUpperCase().trim()]));
        break;
      case "MOVE":
        MyBus.move();
        break;
      case "LEFT":
        MyBus.left();
        break;
      case "RIGHT":
        MyBus.right();
        break;
      case "REPORT":
        MyBus.report();
        break;
    }
    if (MyBus.isInitialized) {
      MyBus.draw();
    }
  }


  function handleFileSelect(evt) {
    let x = "";
    var files = evt.target.files; // FileList object

    // use the 1st file from the list
    f = files[0];

    var reader = new FileReader();

    // Closure to capture the file information.
    reader.onload = (function (theFile) {
      return function (e) {
        // x = $('#exampleBus').val(e.target.result);
        $('#txtBus').val(e.target.result);

      };
    })(f);

    // Read in the image file as a data URL.
    reader.readAsText(f);
  }

  document.getElementById('upload').addEventListener('change', handleFileSelect, false);
  /*
    this.Recorrer = function () {
      $('#exampleBus').each(
        function () {
          this.keyboard($(this).val());
        }
      );
    }*/
}



function splitKey(myKey) {
  myKey = myKey.trim();
  var ind = myKey.trim().indexOf(' ');
  var command = myKey.toUpperCase();
  if (ind > 0)
    command = myKey.substr(0, ind).trim().toUpperCase();
  var params = myKey.substr(ind + 1).replace(/\s\s+/g, '').trim().split(",");
  return { command: command, params: params };
}

function cleanCarPark() {
  $("#txtCommand").val('');
}

function disable() {
  console.log("DISABLED TEXTAREA")
  document.getElementById("txtBus").disabled = true;
  //$("#txtBus").disabled = true;
}

function Focus() {
  document.getElementById("txtCommand").focus();
}