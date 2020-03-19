### Concurrency case studies

This code demonstrates different concurrency techniques, and gives you a way to do some
experiments. You can also use it to look at how different approaches are coded up.

#### Requires
* Celluloid Gem

#### Running

`$ ruby mr.rb [mode] [loadtype] [scale] [iterations]`

* mode (Choose one or more, by initials)
  * s(ynchronous)
  * f(ork)
  * t(hread),
  * c(celluloid)
  * p(ool)

  * loadtype
    * fib: cpu bound fibonacci series
    * mem: memory allocator

  * scale
    * Positive number given to the loadtype to increase it's load

  * iterations
    * how many times to run the test

#### Performance Figures

* Running on a Mac Air 4 Core

###### JRuby
~~~~
concurrency-demo(master)> ruby mr.rb stpc fib 35 50

[Running: mode: stpc, loadtype: fib, scale: 35, count: 50]

                     user     system      total        real
sync            33.370000   0.090000  33.460000 ( 33.453000)
thread          65.220000   0.110000  65.330000 ( 16.714000)
simple pool     68.290000   0.170000  68.460000 ( 18.468000)
celluloid       35.010000   0.140000  35.150000 ( 34.751000)

[End]

concurrency-demo(master)> ruby mr.rb stpc mem 20 50

[Running: mode: stpc, loadtype: mem, scale: 20, count: 50]

                     user     system      total        real
sync            25.060000   0.460000  25.520000 ( 18.263000)
thread          44.080000  11.720000  55.800000 ( 24.735000)
simple pool     43.270000  11.050000  54.320000 ( 24.948000)
celluloid       22.050000   0.380000  22.430000 ( 15.561000)

[End]
~~~~
##### MRI 2.1.5
~~~~
concurrency-demo(master)> ruby mr.rb fstpc fib 35 50

[Running: mode: fstpc, loadtype: fib, scale: 35, count: 50]

                     user     system      total        real
sync            83.840000   0.360000  84.200000 ( 84.737533)
fork             0.000000   0.020000 153.600000 ( 41.656898)
thread          79.500000   0.120000  79.620000 ( 79.720121)
simple pool     80.730000   0.260000  80.990000 ( 81.301132)
celluloid       75.880000   0.250000  76.130000 ( 76.563826)

[End]
concurrency-demo(master)> ruby mr.rb fstpc mem 20 50

[Running: mode: fstpc, loadtype: mem, scale: 20, count: 50]

                     user     system      total        real
sync            24.510000   0.320000  24.830000 ( 25.011000)
fork             0.000000   0.020000  56.800000 ( 15.268124)
thread          26.260000   0.490000  26.750000 ( 27.049471)
simple pool     25.210000   0.520000  25.730000 ( 25.889362)
celluloid       24.550000   0.320000  24.870000 ( 24.947395)

[End]
~~~~
