### BUILD
# From directory: /sample-app-nginx/., run:
#     docker build -t sample-app .

### RUN
# Once build complete, run:
#     docker run -p 5000:5000 sample-app


# set the base image
# n/b: for production, node is only used for building 
# the static Html and javascript files
# as react creates static html and js files after build
# these are what will be served by nginx
# use alias build to be easier to refer this container elsewhere
# e.g inside nginx container
FROM node:12-buster as build
# set working directory
# this is the working folder in the container
# from which the app will be running from
WORKDIR /app
# copy everything to /app directory
# as opposed to on dev, in prod everything is copied to docker
COPY . /app
# install and cache dependencies
RUN npm install --prod
#build the project for production
# RUN npm run build set up production environment
RUN npm run build --prod
# the base image for this is an alpine based nginx image
FROM nginx:1.19.0

# Nginx config file template
COPY nginx/nginx.conf.template /etc/nginx/templates/nginx.conf.template
RUN chmod 755 -R /etc/nginx/templates
# copy the build folder from react to the root of nginx (www)
COPY --from=build /app/build /usr/share/nginx/html
# --------- only for those using react router ----------
# if you are using react router 
# you need to overwrite the default nginx configurations
# remove default nginx configuration file
RUN rm /etc/nginx/conf.d/default.conf
# replace with custom one
# --------- /only for those using react router ----------
# expose port 80 to the outer world

RUN chmod 755 -R /usr/share/nginx/html

EXPOSE 5000
# start nginx 
CMD ["nginx", "-g", "daemon off;"]