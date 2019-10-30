-- SELECT * FROM attend;
select * from events
join attend on events.event_id = attend.event_id;