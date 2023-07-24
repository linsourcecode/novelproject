
import VueRouter from 'vue-router'
import loginMyworld  from '../components/loginMyworld.vue'
import MyWork from '../components/MyWork.vue'
import DataRecord from '../components/DataRecord.vue'
import meanType from '../components/meanType.vue'
import myRecord  from '../components/myRecord.vue'
import showData from '../components/showData.vue'
import upLoad from '../components/upLoad.vue'
import loadFile from '../components/loadFile.vue'
import TitleShow from '../components/TitleShow.vue'
import dataV from '../components/dataV.vue'
import datatable from '../components/datatable.vue'
import word from '../components/word.vue'
const router =  new VueRouter({
	routes:[
        //
        {
            path:'/loginMyworld',
            component:loginMyworld,
            children:[
                {
                    path:'/DataRecord',
                    component:DataRecord
                 },
                 {
                    path:'/meanType',
                    component:meanType
                 },
                 {
                    path:'/myRecord',
                    component:myRecord
                 },
                 {
                  path:'/showData',
                  component:showData
               },
               {
                  path:'/upLoad',
                  component:dataV 
               },
               
               {
                  path:'/loadFile',
                  component:loadFile
               }
        
               ]
        },
        {
           path:'/MyWork',
           component:MyWork,
          
        },
        {
         path:'/t1',
         component:datatable,
        
      },
      {
         path:'/word',
         component:word,
         name:word
      },
        {
         path:'/myTitle',
         component:TitleShow

        }
      
      
    
    
    
    
    ]})

export  default   router 