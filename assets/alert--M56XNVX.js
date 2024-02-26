import{d as l}from"./pinia@2.1.7_vue@3.4.19-BaxWQ2Jo.js";import{S as r}from"./sweetalert2@11.10.5-D1b63BCh.js";const d=l("loader",{state:()=>({loadingQueue:[],loadingTask:""}),getters:{isLoading:({loadingQueue:t})=>!!t.length},actions:{createLoader(t){this.loadingQueue.push(t)},removeLoader(t){this.loadingQueue.splice(this.loadingQueue.indexOf(t),1)},setLoader(t){this.loadingTask=t}}}),g=l("alert",{state:()=>({refuseColor:"#c62828",normalColor:"#aaaaaa",okText:"確定",noText:"取消"}),actions:{toastAlert(t,e){r.fire({icon:e,text:t,toast:!0,timer:1500,showConfirmButton:!1})},modalAlert(t){const{title:e,text:o,icon:n="error"}=t;r.fire({title:e,icon:n,text:o||"",confirmButtonColor:this.refuseColor})},errorAlert(t,e="warning"){if(t.code==="ERR_NETWORK")this.modalAlert({title:"網路連線異常，請重新確認連線狀態後再嘗試",icon:"error"});else if(t.response){const{message:o}=t.response.data;this.toastAlert(o,e)}},checkAlert(t,e){const{title:o,text:n,icon:s="warning"}=t;r.fire({title:o,icon:s,text:n||"",showCancelButton:!0,cancelButtonText:this.noText,focusConfirm:!1,confirmButtonColor:this.refuseColor,confirmButtonText:this.okText}).then(i=>{i.isConfirmed&&e()})},uploadAlert(t){let e="";const o=/jpg|jpeg|png/g;if(!t.name)e="欄位不可空白",this.toastAlert(e,"warning");else if(!t.type.startsWith("image/"))e="須為圖片檔案",this.toastAlert(e,"warning");else if(!o.test(t.name.split(".")[1]))e="不支援此格式",this.toastAlert(e,"warning");else if(t.size>3e6)e="檔案容量過大",this.toastAlert(e,"warning");else return!0},multiverseAlert(t){const e="warning",o=this.refuseColor,n=this.refuseColor,s=this.normalColor,i="不要好了",a=!0;r.fire({icon:e,iconColor:o,title:"你確定？",text:"刪除全部訂單 ... 不要想不開欸！",denyButtonText:i,denyButtonColor:n,confirmButtonColor:s,showDenyButton:!0,confirmButtonText:"確定",focusDeny:a}).then(u=>{u.isConfirmed&&r.fire({icon:e,iconColor:o,title:"你真的確定？",text:"欸 ... 不是，全部訂單欸？",denyButtonText:i,denyButtonColor:n,confirmButtonColor:s,showDenyButton:!0,confirmButtonText:"對啦",focusDeny:a}).then(f=>{f.isConfirmed&&r.fire({icon:e,iconColor:o,title:"你真的真的確定？",text:"這是最後一次詢問，按下就無法回頭了",denyButtonText:i,denyButtonColor:n,confirmButtonColor:s,showDenyButton:!0,confirmButtonText:"確定啦，你好囉唆欸",focusDeny:a}).then(c=>{c.isConfirmed&&t()})})})}}});export{g as a,d as u};