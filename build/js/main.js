window.onload=function(){var e=document.getElementById("myModal"),l=document.getElementById("modal-button"),n=document.getElementById("modal-button2"),t=document.getElementsByClassName("close")[0],s=document.getElementById("hamburger-menu"),o=document.getElementsByClassName("blur-this"),a=document.getElementById("open-hm"),c=document.getElementsByClassName("close-hm")[0];l.onclick=function(){e.style.display="block";for(var l=0;l<o.length;l++)o[l].classList.add("blur-class")},n.onclick=function(){e.style.display="block",s.style.display="none"},t.onclick=function(){e.style.display="none",a.style.display="block",document.getElementsByClassName("header__logo")[0].style.display="inline-flex";for(var l=0;l<o.length;l++)o[l].classList.remove("blur-class")},window.onclick=function(l){l.target==e&&(e.style.display="none")},a.onclick=function(){s.style.display="block",a.style.display="none";for(var e=0;e<o.length;e++)o[e].classList.add("blur-class");document.getElementsByClassName("header__logo")[0].style.display="none"},c.onclick=function(){s.style.display="none",a.style.display="block";for(var e=0;e<o.length;e++)o[e].classList.remove("blur-class");document.getElementsByClassName("header__logo")[0].style.display="inline-flex"},window.onclick=function(e){e.target==s&&(s.style.display="none")}};
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsid2luZG93Iiwib25sb2FkIiwibW9kYWwiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYnRuMSIsImJ0bjIiLCJzcGFuIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImhhbWJ1cmdlck1lbnUiLCJibGNsYXNzIiwib3BlbkhNIiwiY2xvc2VITSIsIm9uY2xpY2siLCJzdHlsZSIsImRpc3BsYXkiLCJpIiwibGVuZ3RoIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiZXZlbnQiLCJ0YXJnZXQiXSwibWFwcGluZ3MiOiJBQUdBQSxPQUFPQyxPQUFTLFdBRWhCLEdBQUlDLEdBQVFDLFNBQVNDLGVBQWUsV0FHaENDLEVBQU9GLFNBQVNDLGVBQWUsZ0JBQy9CRSxFQUFPSCxTQUFTQyxlQUFlLGlCQUUvQkcsRUFBT0osU0FBU0ssdUJBQXVCLFNBQVMsR0FFaERDLEVBQWdCTixTQUFTQyxlQUFlLGtCQUN4Q00sRUFBVVAsU0FBU0ssdUJBQXVCLGFBRTFDRyxFQUFTUixTQUFTQyxlQUFlLFdBR2pDUSxFQUFVVCxTQUFTSyx1QkFBdUIsWUFBWSxFQUUxREgsR0FBS1EsUUFBVSxXQUNYWCxFQUFNWSxNQUFNQyxRQUFVLE9BQ3RCLEtBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFHTixFQUFRTyxPQUFRRCxJQUMzQk4sRUFBUU0sR0FBR0UsVUFBVUMsSUFBSSxlQUdyQ2IsRUFBS08sUUFBVSxXQUNQWCxFQUFNWSxNQUFNQyxRQUFVLFFBQ3RCTixFQUFjSyxNQUFNQyxRQUFVLFFBS3RDUixFQUFLTSxRQUFVLFdBQ1hYLEVBQU1ZLE1BQU1DLFFBQVUsT0FDdEJKLEVBQU9HLE1BQU1DLFFBQVUsUUFDdkJaLFNBQVNLLHVCQUF1QixnQkFBZ0IsR0FBR00sTUFBTUMsUUFBVSxhQUNwRSxLQUFLLEdBQUlDLEdBQUksRUFBR0EsRUFBR04sRUFBUU8sT0FBUUQsSUFDMUJOLEVBQVFNLEdBQUdFLFVBQVVFLE9BQU8sZUFLeENwQixPQUFPYSxRQUFVLFNBQVNRLEdBQ2RBLEVBQU1DLFFBQVVwQixJQUNoQkEsRUFBTVksTUFBTUMsUUFBVSxTQUlsQ0osRUFBT0UsUUFBVSxXQUNiSixFQUFjSyxNQUFNQyxRQUFVLFFBQzlCSixFQUFPRyxNQUFNQyxRQUFVLE1BQ3ZCLEtBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFHTixFQUFRTyxPQUFRRCxJQUMzQk4sRUFBUU0sR0FBR0UsVUFBVUMsSUFBSSxhQUdqQ2hCLFVBQVNLLHVCQUF1QixnQkFBZ0IsR0FBR00sTUFBTUMsUUFBVSxRQUl2RUgsRUFBUUMsUUFBVSxXQUNkSixFQUFjSyxNQUFNQyxRQUFVLE9BQzlCSixFQUFPRyxNQUFNQyxRQUFVLE9BQ3hCLEtBQUssR0FBSUMsR0FBSSxFQUFHQSxFQUFHTixFQUFRTyxPQUFRRCxJQUMxQk4sRUFBUU0sR0FBR0UsVUFBVUUsT0FBTyxhQUVwQ2pCLFVBQVNLLHVCQUF1QixnQkFBZ0IsR0FBR00sTUFBTUMsUUFBVSxlQUt2RWYsT0FBT2EsUUFBVSxTQUFTUSxHQUNsQkEsRUFBTUMsUUFBVWIsSUFDaEJBLEVBQWNLLE1BQU1DLFFBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQ3JlYXRlZCBieSBuaWtpdGEgb24gMDUuMDQuMTcuXG4gKi9cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgLy8gYm9keS4uLlxudmFyIG1vZGFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ215TW9kYWwnKTtcblxuLy8gR2V0IHRoZSBidXR0b24gdGhhdCBvcGVucyB0aGUgbW9kYWxcbnZhciBidG4xID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21vZGFsLWJ1dHRvbicpO1xudmFyIGJ0bjIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbW9kYWwtYnV0dG9uMicpO1xuLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0aGF0IGNsb3NlcyB0aGUgbW9kYWxcbnZhciBzcGFuID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImNsb3NlXCIpWzBdO1xuLy8gR2V0IE1vZGFsXG52YXIgaGFtYnVyZ2VyTWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoYW1idXJnZXItbWVudScpO1xudmFyIGJsY2xhc3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiYmx1ci10aGlzXCIpO1xuLy8gR2V0IHBzZXVkb2VsZW1lbnQgdG8gb3BlbiBNb2RhbFxudmFyIG9wZW5ITSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwib3Blbi1obVwiKTtcblxuLy8gR2V0IHRoZSA8c3Bhbj4gZWxlbWVudCB0byBjbG9zZSBNb2RhbFxudmFyIGNsb3NlSE0gPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiY2xvc2UtaG1cIilbMF07XG4vLyBXaGVuIHRoZSB1c2VyIGNsaWNrcyB0aGUgYnV0dG9uLCBvcGVuIHRoZSBtb2RhbCBcbmJ0bjEub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgIG1vZGFsLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPGJsY2xhc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsY2xhc3NbaV0uY2xhc3NMaXN0LmFkZCgnYmx1ci1jbGFzcycpO1xuICAgIH1cbn1cbmJ0bjIub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgICAgICBoYW1idXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcblxuXG4gICAgfVxuICAgIC8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIG9uIDxzcGFuPiAoeCksIGNsb3NlIHRoZSBtb2RhbFxuc3Bhbi5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgbW9kYWwuc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xuICAgIG9wZW5ITS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXJfX2xvZ29cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWZsZXhcIjtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDxibGNsYXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibGNsYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXItY2xhc3MnKTtcbiAgICB9XG59XG5cbi8vIFdoZW4gdGhlIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIG1vZGFsLCBjbG9zZSBpdFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICBpZiAoZXZlbnQudGFyZ2V0ID09IG1vZGFsKSB7XG4gICAgICAgICAgICBtb2RhbC5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gV2hlbiB1c2VyIGNsaWNrcyBidXR0b24sIG9wZW4gTW9kYWxcbm9wZW5ITS5vbmNsaWNrID0gZnVuY3Rpb24oKSB7XG4gICAgaGFtYnVyZ2VyTWVudS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuICAgIG9wZW5ITS5zdHlsZS5kaXNwbGF5ID0gXCJub25lXCI7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPGJsY2xhc3MubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJsY2xhc3NbaV0uY2xhc3NMaXN0LmFkZCgnYmx1ci1jbGFzcycpO1xuICAgIH1cblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJoZWFkZXJfX2xvZ29cIilbMF0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiO1xufTtcblxuLy8gV2hlbiB1c2VyIGNsaWNrcyBDbG9zZSAoeCksIGNsb3NlIE1vZGFsXG5jbG9zZUhNLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICBoYW1idXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICBvcGVuSE0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjtcbiAgIGZvciAodmFyIGkgPSAwOyBpIDxibGNsYXNzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBibGNsYXNzW2ldLmNsYXNzTGlzdC5yZW1vdmUoJ2JsdXItY2xhc3MnKTtcbiAgICB9XG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImhlYWRlcl9fbG9nb1wiKVswXS5zdHlsZS5kaXNwbGF5ID0gXCJpbmxpbmUtZmxleFwiO1xuXG59O1xuXG4vLyBXaGVuIHVzZXIgY2xpY2tzIGFueXdoZXJlIG91dHNpZGUgb2YgdGhlIE1vZGFsLCBjbG9zZSBNb2RhbFxud2luZG93Lm9uY2xpY2sgPSBmdW5jdGlvbihldmVudCkge1xuICAgIGlmIChldmVudC50YXJnZXQgPT0gaGFtYnVyZ2VyTWVudSkge1xuICAgICAgICBoYW1idXJnZXJNZW51LnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjtcbiAgICB9XG59XG59Il19
