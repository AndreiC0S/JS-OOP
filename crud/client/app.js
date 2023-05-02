var dataview = $('#dataview');
//function getData(iduser, callback) {
function getData() {
    let rezultat = new Promise(function (resolve, reject) {
        $.ajax({
            type: 'GET',
            url: 'http://localhost:3001/users',
            headers: { "Access-Control-Allow-Origin": "*" },
            dataType: 'json',
            contentType: 'application/json',
            success: function (data, status, error) {

                if (data) {
                    resolve(data);
                }
                else {
                    reject('Error, nu s-au primit date!');
                }

            },
            error: function (status, error) {
                reject('Error: a aparut o eroare ' + JSON.stringify(status))

            },
            complete: function (data) {
                console.log('Cererea a fost tratata complet', data)
            }
        });
    });
    return rezultat;
}

function showData(posts) {

    let post = ''
    Object.keys(posts).forEach(item => {

        post += `
        <ul>
        <button class="sterge" data-id="${posts[item].id}" type="button"> Sterge user</button>
        <button class="editeaza" type="button"> Editeaza</button>
        <li>ID: ${posts[item].id}</li>
        <li>name: ${posts[item].name}</li>
        <li>profession: ${posts[item].profession}</li>
        </ul>
        `

    })

    dataview.append(post);

};
$(document).ready(function ($) {

    $("#submit").click(function (e) {


        getData().then((myposts) => {
            showData(myposts);
            console.log('succes promisiunea 1', Object.keys(myposts));
            let idEdit = Object.keys(myposts);
            let getJsElements = myposts
            FMMdeCodInfect(idEdit, getJsElements)


        }).catch((err) => {
            console.log('O promisiune nu s-a realizat', err);
        })

    });

    // $("#sterge").click(function (e) {


    //     let ajxReq = $.ajax({
    //         type: 'DELETE',
    //         url: 'http://localhost:3001/users/1'
    //     });

    //     ajxReq.success(function (data, status, jqXhr) {
    //         $("#message").append("Request is Success.");

    //     });
    //     ajxReq.error(function (jqXhr, textStatus, errorMessage) {
    //         alert(errorMessage);
    //         $("#message").append("Request is Fail.");
    //     });


    // });


    $("#addNew").click(function (e) {

        let newName = $("#nameadd").val();
        let newProff = $("#profesieadd").val();
        let newPass = $("#passwordadd").val();



        let ajxReq = $.ajax({
            type: 'POST',
            data: {
                "name": newName,
                "password": newPass,
                "profession": newProff,
                "id": arrcobai.length + 1
            },
            url: 'http://localhost:3001/users'
        });

        ajxReq.success(function (data, status, jqXhr) {
            $("#message").append("Request is Success.");

        });
        ajxReq.error(function (jqXhr, textStatus, errorMessage) {
            alert(errorMessage);
            $("#message").append("Request is Fail.");
        });


    });

    const FMMdeCodInfect =  (id, elem) => {

        $(".editeaza").each(function (a) {

            $(this).click(function () {
                console.log('elems', id[a])

                const test = elem[id[a]]


                $("#styleEdit").toggleClass("d-none");
                $("#styleEdit").toggleClass("d-flex");

                $(".EditNew").click(function () {

                    let EditName = $("#nameEdit").val();
                    let EditProff = $("#profesieEdit").val();
                    let EditPass = $("#passwordEdit").val();
                    let KeepID = elem[id[a]].id
                
                    if (EditName == "") {
                        EditName = test.name
                    } else {
                        EditName = EditName
                    }

                    if (EditPass == "") {
                        EditPass = test.password
                    } else {
                        EditPass = EditPass
                    }
                    
                    if (EditProff == "") {
                        EditProff = test.profession
                        
                    } else {
                        EditProff = EditProff
                    }
                    let ajxReq = $.ajax({
                        type: 'PUT',
                        headers: { "Access-Control-Allow-Origin": "*" },
                        data: {
                            "name": EditName,
                            "password": EditPass,
                            "profession": EditProff,
                            "id": KeepID
                        },
                        url: `http://localhost:3001/users/${id[a]}`
                    })

                    ajxReq.success(function (data, status, jqXhr) {
                        $("#message").append("Request is Success.");

                    });
                    ajxReq.error(function (jqXhr, textStatus, errorMessage) {
                        alert(errorMessage);
                        $("#message").append("Request is Fail.");
                    });
                });
            });
        });
    };

});