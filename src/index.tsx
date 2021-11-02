import React from "react";
import ReactDOM from 'react-dom';
import { App } from './App';
import { createServer, Model } from 'miragejs';


createServer({
    models: {
        transaction: Model,
    },

    seeds(server){
        server.db.loadData({
            transactions:[{
                id:1,
                title:'Freela',
                type:'deposit',
                category:'Dev',
                amount:6000,
                createdAt: new Date('2021-02-12 09:00:01')
            },{
                id:2,
                title:'Aluguel',
                type:'withdraw',
                category:'Casa',
                amount:500,
                createdAt: new Date('2021-02-20 09:00:01')
            }
        ]
        })
    },

    routes(){
        this.namespace='api';

        this.get('/transactions',()=>{
            return this.schema.all('transaction')
        })
        this.post('/transactions',(schema,request) =>{
            const data = JSON.parse(request.requestBody)
            return schema.create('transaction',data)
        })

    }
})

ReactDOM.render(

    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);