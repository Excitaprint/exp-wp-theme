let SessionLoad = 1
let s:so_save = &g:so | let s:siso_save = &g:siso | setg so=0 siso=0 | setl so=-1 siso=-1
let v:this_session=expand("<sfile>:p")
doautoall SessionLoadPre
silent only
silent tabonly
cd /var/www/html/wp-content/themes/exp-wp-theme
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
let s:shortmess_save = &shortmess
set shortmess+=aoO
badd +1 /var/www/html/wp-content/themes/exp-wp-theme
badd +6 global-vars.css
badd +1 developer-log.md
badd +182 style.css
badd +41 term:///var/www/html/wp-content/themes/exp-wp-theme//103359:/bin/bash
badd +68 header.php
badd +27 term:///var/www/html/wp-content/themes/exp-wp-theme//361577:/bin/bash
badd +153 health://
badd +1 blocks/hero/src/style.css
badd +22 blocks/hero/src/render.php
badd +38 blocks/hero/src/index.js
badd +12 term:///var/www/html/wp-content/themes/exp-wp-theme//361805:/bin/bash
badd +12 blocks/services-copy/src/render.php
argglobal
%argdel
$argadd /var/www/html/wp-content/themes/exp-wp-theme
edit developer-log.md
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
vsplit
wincmd _ | wincmd |
vsplit
2wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd w
let &splitbelow = s:save_splitbelow
let &splitright = s:save_splitright
wincmd t
let s:save_winminheight = &winminheight
let s:save_winminwidth = &winminwidth
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 90 + 134) / 269)
exe '2resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 90 + 134) / 269)
exe 'vert 3resize ' . ((&columns * 89 + 134) / 269)
exe 'vert 4resize ' . ((&columns * 88 + 134) / 269)
argglobal
balt term:///var/www/html/wp-content/themes/exp-wp-theme//103359:/bin/bash
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 81 - ((22 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 81
normal! 030|
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("term:///var/www/html/wp-content/themes/exp-wp-theme//361805:/bin/bash", ":p")) | buffer term:///var/www/html/wp-content/themes/exp-wp-theme//361805:/bin/bash | else | edit term:///var/www/html/wp-content/themes/exp-wp-theme//361805:/bin/bash | endif
if &buftype ==# 'terminal'
  silent file term:///var/www/html/wp-content/themes/exp-wp-theme//361805:/bin/bash
endif
balt /var/www/html/wp-content/themes/exp-wp-theme/developer-log.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
let s:l = 10 - ((4 * winheight(0) + 14) / 29)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 10
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("/var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css", ":p")) | buffer /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css | else | edit /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css | endif
if &buftype ==# 'terminal'
  silent file /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css
endif
balt /var/www/html/wp-content/themes/exp-wp-theme/developer-log.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 61 - ((15 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 61
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("/var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php", ":p")) | buffer /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php | else | edit /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php | endif
if &buftype ==# 'terminal'
  silent file /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php
endif
balt /var/www/html/wp-content/themes/exp-wp-theme/developer-log.md
setlocal foldmethod=manual
setlocal foldexpr=0
setlocal foldmarker={{{,}}}
setlocal foldignore=#
setlocal foldlevel=0
setlocal foldminlines=1
setlocal foldnestmax=20
setlocal foldenable
silent! normal! zE
let &fdl = &fdl
let s:l = 1 - ((0 * winheight(0) + 29) / 59)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
3wincmd w
exe '1resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 1resize ' . ((&columns * 90 + 134) / 269)
exe '2resize ' . ((&lines * 29 + 30) / 61)
exe 'vert 2resize ' . ((&columns * 90 + 134) / 269)
exe 'vert 3resize ' . ((&columns * 89 + 134) / 269)
exe 'vert 4resize ' . ((&columns * 88 + 134) / 269)
tabnext 1
if exists('s:wipebuf') && len(win_findbuf(s:wipebuf)) == 0 && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20
let &shortmess = s:shortmess_save
let &winminheight = s:save_winminheight
let &winminwidth = s:save_winminwidth
let s:sx = expand("<sfile>:p:r")."x.vim"
if filereadable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &g:so = s:so_save | let &g:siso = s:siso_save
set hlsearch
nohlsearch
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
