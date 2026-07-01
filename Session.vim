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
badd +67 developer-log.md
badd +11 footer.php
badd +30 blocks/hero/src/render.php
badd +62 header.php
badd +33 blocks/hero/src/index.js
badd +32 global-vars.css
badd +0 blocks/hero/src/style.css
argglobal
%argdel
$argadd /var/www/html/wp-content/themes/exp-wp-theme
edit developer-log.md
let s:save_splitbelow = &splitbelow
let s:save_splitright = &splitright
set splitbelow splitright
wincmd _ | wincmd |
split
1wincmd k
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd w
wincmd w
wincmd _ | wincmd |
vsplit
1wincmd h
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
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 1resize ' . ((&columns * 57 + 57) / 114)
exe '2resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 56 + 57) / 114)
exe '3resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 57 + 57) / 114)
exe '4resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 4resize ' . ((&columns * 56 + 57) / 114)
argglobal
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
let s:l = 67 - ((19 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 67
normal! 04|
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("/var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css", ":p")) | buffer /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css | else | edit /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css | endif
if &buftype ==# 'terminal'
  silent file /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/style.css
endif
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
let s:l = 1 - ((0 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 1
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("/var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/index.js", ":p")) | buffer /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/index.js | else | edit /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/index.js | endif
if &buftype ==# 'terminal'
  silent file /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/index.js
endif
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
let s:l = 33 - ((11 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 33
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
argglobal
if bufexists(fnamemodify("/var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php", ":p")) | buffer /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php | else | edit /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php | endif
if &buftype ==# 'terminal'
  silent file /var/www/html/wp-content/themes/exp-wp-theme/blocks/hero/src/render.php
endif
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
let s:l = 30 - ((11 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
keepjumps exe s:l
normal! zt
keepjumps 30
normal! 0
lcd /var/www/html/wp-content/themes/exp-wp-theme
wincmd w
2wincmd w
exe '1resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 1resize ' . ((&columns * 57 + 57) / 114)
exe '2resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 2resize ' . ((&columns * 56 + 57) / 114)
exe '3resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 3resize ' . ((&columns * 57 + 57) / 114)
exe '4resize ' . ((&lines * 27 + 28) / 57)
exe 'vert 4resize ' . ((&columns * 56 + 57) / 114)
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
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
