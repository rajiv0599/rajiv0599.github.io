class contact{
    constructor(name,number){
        this.name = name;
        this.number = number;
    }
}
class ui{
    static displayitems(){
        const items = storage.storeitem();
        items.forEach((item)=>ui.addelementtolist(item))
    }
    static addelementtolist(item){
        
        let div = document.querySelector('#list-group');
        let tr = document.createElement('tr');
        tr.innerHTML=`
            <td>${item.name}</td>
            <td>${item.number}</td>
            <td><a href="#" class="btn btn-danger btn-sm delete">X</td>
        `;
        div.appendChild(tr);
    }
    static clearfields(){
        document.querySelector('#input').value="";   
        document.querySelector('#input-number').value="";  
    }
    static removeitem(el){
        el.target.parentElement.parentElement.remove();
    }
    static showalert(message,className){
        const div=document.createElement('div');
        div.className=`alert alert-${className}`;
        div.appendChild(document.createTextNode(message));
        const cont=document.querySelector('.container');
        const form=document.querySelector('#form-group')
        cont.insertBefore(div,form);
        setTimeout(function() {document.querySelector('.alert').remove()},3000)
    }
}

class storage{

    static storeitem(){
        let items;
        if(localStorage.getItem('items')===null){
            items=[];
        }
        else{
            items=JSON.parse(localStorage.getItem('items'));
        }
        return items;
    }
    static addelement(contactname){
        const contact=storage.storeitem();
        contact.push(contactname);
        localStorage.setItem('items',JSON.stringify(contact))
    }
    static deleteelement(number){
        const contact=storage.storeitem();
        contact.forEach((contactname,index)=>{
            if(contactname.number===number){
                contact.splice(index,1)
            }
        });
        localStorage.setItem('items',JSON.stringify(contact))
    }
    
}
document.addEventListener('DOMContentLoaded',ui.displayitems())
document.querySelector('.form-group').addEventListener('submit',(e)=>{
    //add book to list
    e.preventDefault()
    if(name === '' || number === '' ){
        ui.showalert('please fill in all the required fields',"danger")
    }
    else{
    let input= document.querySelector('#input').value;
    let input_number= document.querySelector('#input-number').value;
    const record = new contact(input,input_number)
    ui.addelementtolist(record);
    ui.showalert('Contact added',"success")
    // add to local localStorage
    storage.addelement(record);
    
    
    ui.clearfields();
    }
})
document.querySelector('#list-group').addEventListener('click',(e)=>{
    let input= document.querySelector('#input').value;
    ui.removeitem(e)
    storage.deleteelement(e.target.parentElement.previousElementSibling.textContent)
    ui.showalert('contact deleted',"danger")
})

let filter = document.querySelector('#input-search');
filter.addEventListener('keyup',()=>{
    let filter = document.querySelector('#input-search').value.toUpperCase();
    let table=document.querySelector('#list-group');
    let row=table.querySelectorAll('tr')
    for(i=0;i<row.length;i++){
        td=row[i].getElementsByTagName('td')[0];
        
        
        txtvalue=td.textContent || td.innerText;
        if(txtvalue.toUpperCase().indexOf(filter)>-1){
                
                row[i].style.display = "";
            }
        else{
                row[i].style.display = "none";
        }
        
    }
})