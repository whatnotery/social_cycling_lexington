---
# Feel free to add content and custom Front Matter to this file.

layout: page
---
<div class="">
  {% for event in collections.events.resources %}
  <div class="event-container">
  <img src="{{ event.data.image | relative_url }}" class="event-image" alt="{{ event.data.title }}" width="170" height="170">
   <br> <span>
      <h2>
        {{ event.data.title }}
      </h2>  
     <h3>{{ event.data.time }} on <span id="{{ event.data.date_id_tag}}"></span> at {{ event.data.location}}</h3> 
    </span>
    {{ event.data.about}}
    See updates <a href="{{ event.data.updates_link}}">here</a>
    </div>
  {% endfor %}
</div>