# node-crud-mongodb: This Respo will explain about CRUD Operation with NodeJS and Mongodb
  ## To Create employee : http://localhost:8000/emp/create
    Method:POST
    Request Body Parameter: 
    body:{
      "empName":"dheerendra singh",
      "empMobile": "0091109890",
      "empEmail" : "veer@gm.com"
    }
    
  ## To Get employee List : http://localhost:8000/emp/getAll
    Method:GET
    Request Body Parameter: Not Required
    
    
  ## To Update Employee : http://localhost:8000/emp/update
    Method:PATCH
    Request Body Parameter: 
    body: {
      "empName":"manoj kumar singh",
      "id": "62dfc5a07a1030c828a092d9"
   
   
  ## To Delete Employee : http://localhost:8000/emp/delete
    Method:DELETE
    Request Body Parameter: 
    body: {
      "empName":"manoj kumar singh",
      "id": "62dfc5a07a1030c828a092d9"
    }
    
    
   
