import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Supprime les données existantes
  await prisma.messages.deleteMany();
  await prisma.conversations.deleteMany();
  await prisma.users.deleteMany();

  // Crée des utilisateurs de test
  const password = await bcrypt.hash('password123', 10);

  const user1 = await prisma.users.create({
    data: {
      username: 'john_doe',
      email: 'john@example.com',
      password: password,
      created_at: new Date(),
      country: 'Madagascar',
      city: 'Antananarivo',
      language: 'fr',
      profile_picture: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
  });

  const user2 = await prisma.users.create({
    data: {
      username: 'jane_smith',
      email: 'jane@example.com',
      password: password,
      created_at: new Date(),
      country: 'Madagascar',
      city: 'Toamasina',
      language: 'fr',
      profile_picture: 'https://randomuser.me/api/portraits/women/1.jpg',
    },
  });

  const user3 = await prisma.users.create({
    data: {
      username: 'bob_wilson',
      email: 'bob@example.com',
      password: password,
      created_at: new Date(),
      country: 'Madagascar',
      city: 'Mahajanga',
      language: 'fr',
      profile_picture: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
  });

  // Crée une conversation entre user1 et user2
  const conversation1 = await prisma.conversations.create({
    data: {
      user1_id: user1.id,
      user2_id: user2.id,
      last_message_at: new Date(),
    },
  });

  // Crée quelques messages de test
  await prisma.messages.create({
    data: {
      sender_id: user1.id,
      receiver_id: user2.id,
      conversation_id: conversation1.id,
      content: 'Salut Jane ! Comment vas-tu ?',
      created_at: new Date(Date.now() - 3600000), // 1 heure plus tôt
    },
  });

  await prisma.messages.create({
    data: {
      sender_id: user2.id,
      receiver_id: user1.id,
      conversation_id: conversation1.id,
      content: 'Salut John ! Je vais bien, merci. Et toi ?',
      created_at: new Date(Date.now() - 1800000), // 30 minutes plus tôt
    },
  });

  // Crée une conversation entre user1 et user3
  const conversation2 = await prisma.conversations.create({
    data: {
      user1_id: user1.id,
      user2_id: user3.id,
      last_message_at: new Date(),
    },
  });

  await prisma.messages.create({
    data: {
      sender_id: user1.id,
      receiver_id: user3.id,
      conversation_id: conversation2.id,
      content: 'Hey Bob ! Tu as vu les dernières nouvelles ?',
      created_at: new Date(),
    },
  });

  console.log('Seed data created successfully');
  console.log({
    user1: { id: user1.id, email: user1.email },
    user2: { id: user2.id, email: user2.email },
    user3: { id: user3.id, email: user3.email },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  }); 