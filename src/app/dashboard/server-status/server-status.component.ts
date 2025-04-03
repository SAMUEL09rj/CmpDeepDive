import { Component, DestroyRef, inject } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus:'unknown'|'online'|'offline' = 'unknown';
  private destroyRef=inject(DestroyRef);
ngOnInit(){
  const interval=setInterval(() => {
    const rnd=Math.random();

    if(rnd<0.5){
      this.currentStatus='online';
    }else if(rnd <0.9){
      this.currentStatus='offline';
    }else{
      this.currentStatus='unknown';
    }
  }, 5000);
  this.destroyRef.onDestroy(()=>{
    clearInterval(interval);
  });
}
}
