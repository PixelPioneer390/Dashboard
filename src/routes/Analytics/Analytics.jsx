import { ArrowUpRight, Users, DollarSign, ShoppingBag, Activity } from "lucide-react";
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from "recharts";
import PropTypes from "prop-types";

const Analytics = () => {
    // Sample chart data
    const chartData = [
        { name: "Jan", sales: 4000 },
        { name: "Feb", sales: 3000 },
        { name: "Mar", sales: 5000 },
        { name: "Apr", sales: 4780 },
        { name: "May", sales: 5890 },
        { name: "Jun", sales: 4390 },
        { name: "Jul", sales: 6490 },
    ];

    return (
        <div className="space-y-6">
            {/* Page Heading */}
            <div>
                <h1 className="text-2xl font-bold text-slate-900 dark:text-white">Analytics</h1>
                <p className="text-sm text-slate-500">Overview of your company performance</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                <KPIBox
                    title="Total Sales"
                    value="$24,300"
                    icon={<DollarSign className="text-white" />}
                    growth="+12.4%"
                />
                <KPIBox
                    title="Active Users"
                    value="1,250"
                    icon={<Users className="text-white" />}
                    growth="+4.7%"
                />
                <KPIBox
                    title="Orders"
                    value="780"
                    icon={<ShoppingBag className="text-white" />}
                    growth="-1.2%"
                />
                <KPIBox
                    title="Site Visits"
                    value="14,400"
                    icon={<Activity className="text-white" />}
                    growth="+9.8%"
                />
            </div>

            {/* Chart Section */}
            <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-900">
                <h2 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Sales Over Time</h2>
                <div className="h-64 w-full">
                    <ResponsiveContainer
                        width="100%"
                        height="100%"
                    >
                        <LineChart data={chartData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis
                                dataKey="name"
                                stroke="#94a3b8"
                            />
                            <YAxis stroke="#94a3b8" />
                            <Tooltip />
                            <Line
                                type="monotone"
                                dataKey="sales"
                                stroke="#6366f1"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>

            {/* Recent Activity Table */}
            <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-900">
                <h2 className="mb-4 text-lg font-semibold text-slate-800 dark:text-white">Recent Activity</h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-left text-sm">
                        <thead className="border-b border-slate-200 text-slate-500 dark:border-slate-700">
                            <tr>
                                <th className="px-4 py-2">User</th>
                                <th className="px-4 py-2">Action</th>
                                <th className="px-4 py-2">Date</th>
                            </tr>
                        </thead>
                        <tbody className="text-slate-700 dark:text-slate-200">
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">John Doe</td>
                                <td className="px-4 py-2">Placed an order</td>
                                <td className="px-4 py-2">2025-08-04</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Sarah Khan</td>
                                <td className="px-4 py-2">Signed up</td>
                                <td className="px-4 py-2">2025-08-03</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ali Raza</td>
                                <td className="px-4 py-2">Upgraded plan</td>
                                <td className="px-4 py-2">2025-08-02</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Emma Watson</td>
                                <td className="px-4 py-2">Cancelled subscription</td>
                                <td className="px-4 py-2">2025-08-02</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Michael Brown</td>
                                <td className="px-4 py-2">Downloaded report</td>
                                <td className="px-4 py-2">2025-08-01</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Jessica Lee</td>
                                <td className="px-4 py-2">Updated profile</td>
                                <td className="px-4 py-2">2025-07-31</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">David Wilson</td>
                                <td className="px-4 py-2">Reset password</td>
                                <td className="px-4 py-2">2025-07-30</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Sophia Garcia</td>
                                <td className="px-4 py-2">Completed tutorial</td>
                                <td className="px-4 py-2">2025-07-29</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Daniel Martinez</td>
                                <td className="px-4 py-2">Shared document</td>
                                <td className="px-4 py-2">2025-07-28</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Olivia Johnson</td>
                                <td className="px-4 py-2">Created project</td>
                                <td className="px-4 py-2">2025-07-27</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">James Smith</td>
                                <td className="px-4 py-2">Deleted account</td>
                                <td className="px-4 py-2">2025-07-26</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Isabella Williams</td>
                                <td className="px-4 py-2">Submitted feedback</td>
                                <td className="px-4 py-2">2025-07-25</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ethan Jones</td>
                                <td className="px-4 py-2">Verified email</td>
                                <td className="px-4 py-2">2025-07-24</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Mia Brown</td>
                                <td className="px-4 py-2">Requested API key</td>
                                <td className="px-4 py-2">2025-07-23</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Alexander Davis</td>
                                <td className="px-4 py-2">Joined team</td>
                                <td className="px-4 py-2">2025-07-22</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Charlotte Miller</td>
                                <td className="px-4 py-2">Left team</td>
                                <td className="px-4 py-2">2025-07-21</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Benjamin Wilson</td>
                                <td className="px-4 py-2">Changed settings</td>
                                <td className="px-4 py-2">2025-07-20</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Amelia Moore</td>
                                <td className="px-4 py-2">Started trial</td>
                                <td className="px-4 py-2">2025-07-19</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Lucas Taylor</td>
                                <td className="px-4 py-2">Ended trial</td>
                                <td className="px-4 py-2">2025-07-18</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Harper Anderson</td>
                                <td className="px-4 py-2">Viewed dashboard</td>
                                <td className="px-4 py-2">2025-07-17</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Henry Thomas</td>
                                <td className="px-4 py-2">Exported data</td>
                                <td className="px-4 py-2">2025-07-16</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Evelyn Jackson</td>
                                <td className="px-4 py-2">Imported contacts</td>
                                <td className="px-4 py-2">2025-07-15</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Sebastian White</td>
                                <td className="px-4 py-2">Created template</td>
                                <td className="px-4 py-2">2025-07-14</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Victoria Harris</td>
                                <td className="px-4 py-2">Deleted file</td>
                                <td className="px-4 py-2">2025-07-13</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Jackson Martin</td>
                                <td className="px-4 py-2">Renewed subscription</td>
                                <td className="px-4 py-2">2025-07-12</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Aria Thompson</td>
                                <td className="px-4 py-2">Enabled 2FA</td>
                                <td className="px-4 py-2">2025-07-11</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Leo Garcia</td>
                                <td className="px-4 py-2">Disabled notifications</td>
                                <td className="px-4 py-2">2025-07-10</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Luna Martinez</td>
                                <td className="px-4 py-2">Uploaded avatar</td>
                                <td className="px-4 py-2">2025-07-09</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Mateo Robinson</td>
                                <td className="px-4 py-2">Completed survey</td>
                                <td className="px-4 py-2">2025-07-08</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Layla Clark</td>
                                <td className="px-4 py-2">Invited friend</td>
                                <td className="px-4 py-2">2025-07-07</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Grayson Rodriguez</td>
                                <td className="px-4 py-2">Accepted invite</td>
                                <td className="px-4 py-2">2025-07-06</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Stella Lewis</td>
                                <td className="px-4 py-2">Rejected invite</td>
                                <td className="px-4 py-2">2025-07-05</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Julian Walker</td>
                                <td className="px-4 py-2">Bookmarked item</td>
                                <td className="px-4 py-2">2025-07-04</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Nora Hall</td>
                                <td className="px-4 py-2">Commented</td>
                                <td className="px-4 py-2">2025-07-03</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Carter Allen</td>
                                <td className="px-4 py-2">Reacted to post</td>
                                <td className="px-4 py-2">2025-07-02</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Hazel Young</td>
                                <td className="px-4 py-2">Reported issue</td>
                                <td className="px-4 py-2">2025-07-01</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Wyatt Hernandez</td>
                                <td className="px-4 py-2">Closed ticket</td>
                                <td className="px-4 py-2">2025-06-30</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ellie King</td>
                                <td className="px-4 py-2">Opened ticket</td>
                                <td className="px-4 py-2">2025-06-29</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Owen Wright</td>
                                <td className="px-4 py-2">Logged in</td>
                                <td className="px-4 py-2">2025-06-28</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Penelope Lopez</td>
                                <td className="px-4 py-2">Logged out</td>
                                <td className="px-4 py-2">2025-06-27</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Lincoln Hill</td>
                                <td className="px-4 py-2">Scheduled event</td>
                                <td className="px-4 py-2">2025-06-26</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Aurora Scott</td>
                                <td className="px-4 py-2">Cancelled event</td>
                                <td className="px-4 py-2">2025-06-25</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Eli Green</td>
                                <td className="px-4 py-2">Edited post</td>
                                <td className="px-4 py-2">2025-06-24</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Nova Adams</td>
                                <td className="px-4 py-2">Deleted post</td>
                                <td className="px-4 py-2">2025-06-23</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Hudson Baker</td>
                                <td className="px-4 py-2">Restored item</td>
                                <td className="px-4 py-2">2025-06-22</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Scarlett Gonzalez</td>
                                <td className="px-4 py-2">Archived project</td>
                                <td className="px-4 py-2">2025-06-21</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ezra Nelson</td>
                                <td className="px-4 py-2">Unarchived project</td>
                                <td className="px-4 py-2">2025-06-20</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Chloe Carter</td>
                                <td className="px-4 py-2">Changed password</td>
                                <td className="px-4 py-2">2025-06-19</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Asher Mitchell</td>
                                <td className="px-4 py-2">Linked social account</td>
                                <td className="px-4 py-2">2025-06-18</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Madison Perez</td>
                                <td className="px-4 py-2">Unlinked social account</td>
                                <td className="px-4 py-2">2025-06-17</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Gian Roberts</td>
                                <td className="px-4 py-2">Set reminder</td>
                                <td className="px-4 py-2">2025-06-16</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Aaliyah Turner</td>
                                <td className="px-4 py-2">Cleared cache</td>
                                <td className="px-4 py-2">2025-06-15</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Rowan Phillips</td>
                                <td className="px-4 py-2">Changed theme</td>
                                <td className="px-4 py-2">2025-06-14</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Skylar Campbell</td>
                                <td className="px-4 py-2">Enabled dark mode</td>
                                <td className="px-4 py-2">2025-06-13</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Xavier Parker</td>
                                <td className="px-4 py-2">Disabled dark mode</td>
                                <td className="px-4 py-2">2025-06-12</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Paisley Evans</td>
                                <td className="px-4 py-2">Created folder</td>
                                <td className="px-4 py-2">2025-06-11</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Dominic Edwards</td>
                                <td className="px-4 py-2">Renamed file</td>
                                <td className="px-4 py-2">2025-06-10</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Kinsley Collins</td>
                                <td className="px-4 py-2">Moved item</td>
                                <td className="px-4 py-2">2025-06-09</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Atlas Stewart</td>
                                <td className="px-4 py-2">Copied link</td>
                                <td className="px-4 py-2">2025-06-08</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Emery Sanchez</td>
                                <td className="px-4 py-2">Shared screen</td>
                                <td className="px-4 py-2">2025-06-07</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">River Morris</td>
                                <td className="px-4 py-2">Ended call</td>
                                <td className="px-4 py-2">2025-06-06</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Everly Rogers</td>
                                <td className="px-4 py-2">Started call</td>
                                <td className="px-4 py-2">2025-06-05</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Jude Reed</td>
                                <td className="px-4 py-2">Muted notifications</td>
                                <td className="px-4 py-2">2025-06-04</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Willow Cook</td>
                                <td className="px-4 py-2">Unmuted notifications</td>
                                <td className="px-4 py-2">2025-06-03</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Weston Morgan</td>
                                <td className="px-4 py-2">Saved draft</td>
                                <td className="px-4 py-2">2025-06-02</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Sawyer Bell</td>
                                <td className="px-4 py-2">Deleted draft</td>
                                <td className="px-4 py-2">2025-06-01</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Emilia Murphy</td>
                                <td className="px-4 py-2">Published post</td>
                                <td className="px-4 py-2">2025-05-31</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Silas Bailey</td>
                                <td className="px-4 py-2">Unpublished post</td>
                                <td className="px-4 py-2">2025-05-30</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Maya Rivera</td>
                                <td className="px-4 py-2">Followed user</td>
                                <td className="px-4 py-2">2025-05-29</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Waylon Cooper</td>
                                <td className="px-4 py-2">Unfollowed user</td>
                                <td className="px-4 py-2">2025-05-28</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ariana Richardson</td>
                                <td className="px-4 py-2">Blocked user</td>
                                <td className="px-4 py-2">2025-05-27</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Knox Cox</td>
                                <td className="px-4 py-2">Unblocked user</td>
                                <td className="px-4 py-2">2025-05-26</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Ayla Howard</td>
                                <td className="px-4 py-2">Created channel</td>
                                <td className="px-4 py-2">2025-05-25</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Theo Ward</td>
                                <td className="px-4 py-2">Deleted channel</td>
                                <td className="px-4 py-2">2025-05-24</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Eliana Torres</td>
                                <td className="px-4 py-2">Joined channel</td>
                                <td className="px-4 py-2">2025-05-23</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Kai Peterson</td>
                                <td className="px-4 py-2">Left channel</td>
                                <td className="px-4 py-2">2025-05-22</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Lydia Gray</td>
                                <td className="px-4 py-2">Pinned message</td>
                                <td className="px-4 py-2">2025-05-21</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Bennett Ramirez</td>
                                <td className="px-4 py-2">Unpinned message</td>
                                <td className="px-4 py-2">2025-05-20</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Melody James</td>
                                <td className="px-4 py-2">Marked as read</td>
                                <td className="px-4 py-2">2025-05-19</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Declan Watson</td>
                                <td className="px-4 py-2">Marked as unread</td>
                                <td className="px-4 py-2">2025-05-18</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Valentina Brooks</td>
                                <td className="px-4 py-2">Enabled autosave</td>
                                <td className="px-4 py-2">2025-05-17</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Archer Kelly</td>
                                <td className="px-4 py-2">Disabled autosave</td>
                                <td className="px-4 py-2">2025-05-16</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Adeline Sanders</td>
                                <td className="px-4 py-2">Set status</td>
                                <td className="px-4 py-2">2025-05-15</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Rhett Price</td>
                                <td className="px-4 py-2">Cleared status</td>
                                <td className="px-4 py-2">2025-05-14</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Liliana Bennett</td>
                                <td className="px-4 py-2">Created poll</td>
                                <td className="px-4 py-2">2025-05-13</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Calvin Wood</td>
                                <td className="px-4 py-2">Voted in poll</td>
                                <td className="px-4 py-2">2025-05-12</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Camila Barnes</td>
                                <td className="px-4 py-2">Closed poll</td>
                                <td className="px-4 py-2">2025-05-11</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Enzo Ross</td>
                                <td className="px-4 py-2">Reopened poll</td>
                                <td className="px-4 py-2">2025-05-10</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Journee Henderson</td>
                                <td className="px-4 py-2">Created label</td>
                                <td className="px-4 py-2">2025-05-09</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Zane Coleman</td>
                                <td className="px-4 py-2">Deleted label</td>
                                <td className="px-4 py-2">2025-05-08</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Rosalie Jenkins</td>
                                <td className="px-4 py-2">Applied label</td>
                                <td className="px-4 py-2">2025-05-07</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Kylo Perry</td>
                                <td className="px-4 py-2">Removed label</td>
                                <td className="px-4 py-2">2025-05-06</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Lennon Powell</td>
                                <td className="px-4 py-2">Sorted items</td>
                                <td className="px-4 py-2">2025-05-05</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Oakley Long</td>
                                <td className="px-4 py-2">Filtered view</td>
                                <td className="px-4 py-2">2025-05-04</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Rory Hughes</td>
                                <td className="px-4 py-2">Cleared filter</td>
                                <td className="px-4 py-2">2025-05-03</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Zara Flores</td>
                                <td className="px-4 py-2">Saved search</td>
                                <td className="px-4 py-2">2025-05-02</td>
                            </tr>
                            <tr className="border-b border-slate-100 dark:border-slate-800">
                                <td className="px-4 py-2">Kellan Washington</td>
                                <td className="px-4 py-2">Deleted search</td>
                                <td className="px-4 py-2">2025-05-01</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-2">Dallas Butler</td>
                                <td className="px-4 py-2">Created shortcut</td>
                                <td className="px-4 py-2">2025-04-30</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default Analytics;

// --- KPI Card Component ---
const KPIBox = ({ title, value, icon, growth }) => {
    return (
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow dark:bg-slate-900">
            <div className="rounded-full bg-slate-100 p-3 dark:bg-slate-800">{icon}</div>
            <div>
                <p className="text-sm text-slate-500">{title}</p>
                <h3 className="text-lg font-bold text-slate-800 dark:text-white">{value}</h3>
                <p className="flex items-center gap-1 text-xs text-green-500">
                    <ArrowUpRight size={14} /> {growth}
                </p>
            </div>
        </div>
    );
};

KPIBox.propTypes = {
    title: PropTypes.string.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    icon: PropTypes.node.isRequired,
    growth: PropTypes.string.isRequired,
};
