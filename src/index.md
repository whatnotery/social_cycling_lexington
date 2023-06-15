---
# Feel free to add content and custom Front Matter to this file.
title: Welcome!
layout: default
---

Social Cycling Lexington is dedicated to improving local bike culture by organizing and advertising cycling events in the Lexington area. Social Cycling Lexington holds multiple group rides each month for riders of all skill levels and informs the community of other group rides in the area

  {% for event in collections.events.resources %}
  <div class="event-container"> 
  <div class="image-title-flex">   
   <img src="{{ event.data.image | relative_url }}" class="event-image" alt="{{ event.data.title }}" width="170" height="170">   
      <h2>
        {{ event.data.title }}
      </h2>  
      </div>
     <h3>{{ event.data.time }} on <span id="{{ event.data.date_id_tag}}"></span> at {{ event.data.location}}</h3> 
    {{ event.data.about}}
    See updates <a href="{{ event.data.updates_link}}">here</a>
    </div>
  {% endfor %}