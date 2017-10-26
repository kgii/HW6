import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-premier',
  templateUrl: './premier.component.html',
  styleUrls: ['./premier.component.css']
})
export class PremierComponent implements OnInit {
  private name: String[];
  private pic: String[];

  constructor() { }

  ngOnInit() {
    this.name = ["Manchester City","Manchester United","Spur","Chelsea","Arsenal",
    "Watford","Newcastle","Burnley", "Liverpool TT","Southamton","Huddlefield",
   "Brighton"];

   this.pic = ["https://www.mancity.com/-/media/images/manchestercityfcbadge"
   , "http://www.manutd.com/~/media/510AE241278B45FF97125DC1E1E32CBF.ashx"
   , "https://platform-static-files.s3.amazonaws.com/premierleague/badges/t6.png"
   , "https://thai.chelseafc.com/content/cfc/en/ref/clubs/en/chelsea.img.png"
   , "https://pbs.twimg.com/profile_images/875732170731638785/X9mAFEL4.jpg"
   , "http://icons.iconarchive.com/icons/giannis-zographos/football-league-championship/256/Watford-FC-icon.png"
   , "http://futhead.cursecdn.com/static/img/16/clubs_large/13.png"
   , "https://upload.wikimedia.org/wikipedia/en/0/02/Burnley_FC_badge.png"
   , "http://media-assets-03.thedrum.com/cache/images/thedrum-prod/public-drum_basic_article-111959-main_images-LiverpoolLogo_0--default--640.jpg"
   , "https://upload.wikimedia.org/wikipedia/hif/8/85/FC_Southampton.png"
   , "https://i.pinimg.com/originals/a1/05/94/a1059443cd3c1c271f07efec09284f4a.jpg"
   , "http://www.northstandchat.com/attachment.php?attachmentid=72847&d=1457183704"

 ];

  }

}
