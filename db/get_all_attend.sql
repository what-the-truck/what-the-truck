-- SELECT * FROM attend;
-- select * from events
-- join attend on events.event_id = attend.event_id;

SELECT * from attend
join trucks on attend.truck_id = trucks.truck_id;
