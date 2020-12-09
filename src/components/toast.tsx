//Made this with js so that the message and duration can be given as parameters
export const toast = async (message: string, duration = 5000) =>{
    const toast = document.createElement('ion-toast');
    toast.message = message;
    toast.duration = duration;
  
    document.body.appendChild(toast);
    return toast.present();
}