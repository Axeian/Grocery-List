box = document.querySelector('.box');
input = box.querySelector('input');
list = box.querySelector('.list');
submit = box.querySelector('#submit');
editbutton = box.querySelector('#edit');
clearitems = box.querySelector('#clear');
popup = box.querySelector('#popup');


submit.addEventListener("click", addtolist);
editbutton.addEventListener("click", editlist);
input.addEventListener("keypress", addtolistEnter);
clearitems.addEventListener("click", clearlist);

function addtolist()
{
    if(input.value == "")
    {
        popup.innerHTML = 'Please Enter Value.';
        showpopup(-1);
        return;
    }
    var itemli = document.createElement('LI');

    var span = document.createElement('SPAN');
    span.innerHTML = input.value;

    var edit = document.createElement('BUTTON');
    edit.innerHTML = 'Edit';
    edit.className = 'edititem';

    var del = document.createElement('BUTTON');
    del.innerHTML = 'Delete';
    del.className = 'delete'
    
    itemli.appendChild(span);
    itemli.appendChild(edit);
    itemli.appendChild(del);
    list.appendChild(itemli);

    clearitems.className = "";

    popup.innerHTML = 'Item Added To The List.';
    showpopup(1);

    input.value = "";

    del.addEventListener("click", deleteitem);
    edit.addEventListener("click", edititem);
}

function addtolistEnter(event)
{
    if(event.which == 13)
    {
        if(submit.className != 'hide')
            addtolist();
        else
            editlist();
    }
    
}

function clearlist()
{
    var listitems = list.querySelectorAll('li');
    for(var i = 0; i < listitems.length; i++)
        listitems[i].remove();

    popup.innerHTML = 'List Cleared.';
    showpopup(-1);
    setTimeout(function delay()
    {
        clearitems.className = 'hide';
    }, 500);
    
    editbutton.className = 'hide';
    submit.className = "";
    input.value = "";

}

function deleteitem()
{
    this.parentElement.remove();
    popup.innerHTML = 'Item Removed.';
    showpopup(-1);
}

function edititem()
{
    currently_editing = this.previousSibling;
    input.value = currently_editing.innerHTML;
    submit.className = "hide";
    editbutton.className = "";
}

function editlist()
{
    newval = input.value;
    currently_editing.innerHTML = newval;
    editbutton.className = "hide";
    submit.className = "";
    input.value = "";

    popup.innerHTML = 'Item Edited.';
    showpopup(1);
}

function showpopup(redorgreen)
{
    if(redorgreen == -1)
        popup.className = "red";
    else
        popup.className = "green";
    
    setTimeout(function hide()
    {
        popup.className = 'transparent';
    }, 1000)
}