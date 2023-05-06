---
# Feel free to add content and custom Front Matter to this file.
layout: page
---
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
