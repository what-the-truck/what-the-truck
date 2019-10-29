CREATE TABLE "events" (
	"event_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"address" TEXT NOT NULL,
	"latitude" TEXT NOT NULL,
	"longitude" TEXT NOT NULL,
	"date" DATE NOT NULL,
	"time" TIME NOT NULL,
	CONSTRAINT "events_pk" PRIMARY KEY ("event_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "menu" (
	"menu_id" serial NOT NULL,
	"truck_id" int NOT NULL,
	"product_name" varchar(255) NOT NULL,
	"price" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"m_img" TEXT NOT NULL,
	CONSTRAINT "menu_pk" PRIMARY KEY ("menu_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "users" (
	"user_id" serial NOT NULL,
	"email" varchar(255) NOT NULL,
	"hash" TEXT NOT NULL,
	CONSTRAINT "users_pk" PRIMARY KEY ("user_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "attend" (
	"attend_id" serial NOT NULL,
	"truck_id" int NOT NULL,
	"event_id" int NOT NULL,
	CONSTRAINT "attend_pk" PRIMARY KEY ("attend_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "orders" (
	"order_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"attend_id" int NOT NULL,
	"timestamp" TIMESTAMP NOT NULL,
	CONSTRAINT "orders_pk" PRIMARY KEY ("order_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "specific_orders" (
	"specific_order_id" serial NOT NULL,
	"order_id" int NOT NULL,
	"menu_id" int NOT NULL,
	"completed" BOOLEAN NOT NULL,
	CONSTRAINT "specific_orders_pk" PRIMARY KEY ("specific_order_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "follows" (
	"follow_id" serial NOT NULL,
	"user_id" int NOT NULL,
	"truck_id" int NOT NULL,
	CONSTRAINT "follows_pk" PRIMARY KEY ("follow_id")
) WITH (
  OIDS=FALSE
);



CREATE TABLE "trucks" (
	"truck_id" serial NOT NULL,
	"name" varchar(255) NOT NULL,
	"phone" TEXT NOT NULL,
	"img" TEXT NOT NULL,
	"food_type" TEXT NOT NULL,
	"description" TEXT NOT NULL,
	"hash" TEXT NOT NULL,
	"email" TEXT NOT NULL,
	CONSTRAINT "trucks_pk" PRIMARY KEY ("truck_id")
) WITH (
  OIDS=FALSE
);




ALTER TABLE "menu" ADD CONSTRAINT "menu_fk0" FOREIGN KEY ("truck_id") REFERENCES "trucks"("truck_id");


ALTER TABLE "attend" ADD CONSTRAINT "attend_fk0" FOREIGN KEY ("truck_id") REFERENCES "trucks"("truck_id");
ALTER TABLE "attend" ADD CONSTRAINT "attend_fk1" FOREIGN KEY ("event_id") REFERENCES "events"("event_id");

ALTER TABLE "orders" ADD CONSTRAINT "orders_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "orders" ADD CONSTRAINT "orders_fk1" FOREIGN KEY ("attend_id") REFERENCES "attend"("attend_id");

ALTER TABLE "specific_orders" ADD CONSTRAINT "specific_orders_fk0" FOREIGN KEY ("order_id") REFERENCES "orders"("order_id");
ALTER TABLE "specific_orders" ADD CONSTRAINT "specific_orders_fk1" FOREIGN KEY ("menu_id") REFERENCES "menu"("menu_id");

ALTER TABLE "follows" ADD CONSTRAINT "follows_fk0" FOREIGN KEY ("user_id") REFERENCES "users"("user_id");
ALTER TABLE "follows" ADD CONSTRAINT "follows_fk1" FOREIGN KEY ("truck_id") REFERENCES "trucks"("truck_id");

