d=$(date +%Y%m%d%H%M%S)
echo $d
zip -r public.zip public
scp public.zip busation.ru:"/home/mike/nginx_apps/gatsby/"
ssh busation.ru "cd /home/mike/nginx_apps/gatsby \
&& unzip public.zip \
&& mv html old_html$d \
&& mv public html \
&& rm public.zip"
rm public.zip

# ssh busation.ru "cd ~/apps/myaksts/shared/system && zip -r applic_files$d.zip applic_files"
# scp jupiter.j123.ru:"~/apps/myaksts/shared/system/applic_files$d.zip" /Users/mike/Downloads/
# ssh jupiter.j123.ru "rm ~/apps/myaksts/shared/system/applic_files$d.zip"
