const { prisma } = require('../generated/prisma-client')

async function main() {
  await prisma.upsertUser({
    where: {
      email: 'mike.brown@example.com',
      slug: 'mike-brown',
    },
    update: {},
    create: {
      email: 'mike.brown@example.com',
      slug: 'mike-brown',
      name: 'Mike Brown',
      entities: {
        create: [
          {
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr.',
            isPublic: true,
          },
          {
            text: 'Invidunt ut labore et dolore magna aliquyam erat,',
            isPublic: true,
          },
          {
            text:
              'Sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,',
            isPublic: false,
          },
        ],
      },
    },
  })
}

main().catch(error => console.error(error))
