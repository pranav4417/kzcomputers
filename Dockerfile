FROM node:20-alpine

WORKDIR /app

# Install openssl (for Prisma warning)
RUN apk add --no-cache openssl

COPY . .

# Pass env at build time
ARG JWT_SECRET
ENV JWT_SECRET=$JWT_SECRET

RUN npm install
RUN npx prisma generate

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
