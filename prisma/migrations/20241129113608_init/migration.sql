-- CreateTable
CREATE TABLE "Cart" (
    "id" SERIAL NOT NULL,
    "buyer_id" INTEGER NOT NULL,
    "seller_id" INTEGER NOT NULL,
    "publication_id" INTEGER NOT NULL,
    "quantity" INTEGER DEFAULT 1,
    "total_price" DECIMAL(10,2) NOT NULL,
    "transaction_date" TIMESTAMP(6) NOT NULL,
    "status" VARCHAR DEFAULT 'pending',
    "is_deleted" BOOLEAN DEFAULT false,

    CONSTRAINT "Cart_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_buyer_id_fkey" FOREIGN KEY ("buyer_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_publication_id_fkey" FOREIGN KEY ("publication_id") REFERENCES "Publications"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE "Cart" ADD CONSTRAINT "Cart_seller_id_fkey" FOREIGN KEY ("seller_id") REFERENCES "Users"("id") ON DELETE NO ACTION ON UPDATE NO ACTION;
