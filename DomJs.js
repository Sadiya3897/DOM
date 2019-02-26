


function Createtable() {
    var Details = [
        {
            "firstName": "Max",
            "lastName": "Well",
            "Email": "MW@gmail.com",
            "ID": 11,
            "PhoneNo": 12854,
            "Designation": "Maid",
            "DOB": "03-08-1997"

        },

        {
            "firstName": "Truck",
            "lastName": "Mug",
            "Email": "TM@gmail.com",
            "ID": 12,
            "PhoneNo": 32456,
            "Designation": "Cook",
            "DOB": "03-08-1998"
        },
        {
            "firstName": "Nex",
            "lastName": "Wax",
            "Email": "NW@gmail.com",
            "ID": 13,
            "PhoneNo": 98745,
            "Designation": "Gardener",
            "DOB": "03-08-1999"
        },
        {
            "firstName": "Flex",
            "lastName": "Mop",
            "Email": "FM@gmail.com",
            "ID": 14,
            "PhoneNo": 45612,
            "Designation": "Sweeper",
            "DOB": "03-08-2000"
        },
        {
            "firstName": "Paux",
            "lastName": "Fake",
            "Email": "PK@gmail.com",
            "ID": 15,
            "PhoneNo": 45682,
            "Designation": "Watchman",
            "DOB": "03-08-2001"
        },
        {
            "firstName": "Rome",
            "lastName": "Ven",
            "Email": "RV@gmail.com",
            "ID": 19,
            "PhoneNo": 78532,
            "Designation": "Carpenter",
            "DOB": "03-08-2002"
        },
        {
            "firstName": "Nigga",
            "lastName": "You",
            "Email": "NY@gmail.com",
            "ID": 18,
            "PhoneNo": 97453,
            "Designation": "Electrician",
            "DOB": "03-08-2003"
        }


    ]
    if (Details.length > 0) {
        var table = document.createElement("table");
        var col = []; // define an empty array
        for (var i = 0; i < Details.length; i++) {
            for (var key in Details[i]) {
                if (col.indexOf(key) === -1) {
                    col.push(key);
                }
            }
        }
        // CREATE TABLE HEAD .
        var tHead = document.createElement("thead");


        // CREATE ROW FOR TABLE HEAD .
        var hRow = document.createElement("tr");

        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < col.length; i++) {
            var th = document.createElement("th");
            console.log(th)
            th.innerHTML = col[i];
            console.log(col, i)
            hRow.appendChild(th);
        }
        tHead.appendChild(hRow);
        table.appendChild(tHead);
        // CREATE TABLE BODY .
        var tBody = document.createElement("tbody");

        // ADD COLUMN HEADER TO ROW OF TABLE HEAD.
        for (var i = 0; i < Details.length; i++) {

            var bRow = document.createElement("tr"); // CREATE ROW FOR EACH RECORD .


            for (var j = 0; j < col.length; j++) {
                var td = document.createElement("td");
                td.innerHTML = Details[i][col[j]];
                bRow.appendChild(td);
            }
            tBody.appendChild(bRow)

        }
        table.appendChild(tBody);
        var MytableStorage = document.getElementById("Mytabledata");
        MytableStorage.innerHTML = "";
        MytableStorage.appendChild(table);


    }

}
function sortTable(n) {
    var table, rows, switching, i, x, y, shouldSwitch, dir, switchcount = 0;
    table = document.getElementById("idsort");
    switching = true;
    dir = "asc"; 
    while (switching) {
      switching = false;
      rows = table.getElementsByTagName("TR");
      for (i = 1; i < (rows.length - 1); i++) {
        shouldSwitch = false;
        x = rows[i].getElementsByTagName("TD")[n];
        y = rows[i + 1].getElementsByTagName("TD")[n];
        if (dir == "asc") {
          if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        } else if (dir == "desc") {
          if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
            shouldSwitch= true;
            break;
          }
        }
      }
      if (shouldSwitch) {
        rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
        switching = true;
        switchcount ++;      
      } else {
        if (switchcount == 0 && dir == "asc") {
          dir = "desc";
          switching = true;
        }
      }
    }
}